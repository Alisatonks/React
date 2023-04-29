import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer, ViteDevServer } from 'vite';
import parser from 'cookie-parser';
import {
  RenderToPipeableStreamOptions,
  PipeableStream,
} from 'react-dom/server';
import store from './src/redux/store';

type MyStoreState = ReturnType<typeof store.getState>;

const port = process.env.PORT || 3001;
const dirName = path.dirname(fileURLToPath(import.meta.url));
const productionMode = process.env.NODE_ENV === 'production';

const myServerCreation = async () => {
  const app = express();

  let viteServer: ViteDevServer;

  app.use(parser());

  if (productionMode) {
    app.use(
      '/assets',
      (await import('serve-static')).default(
        path.resolve(dirName, 'dist/client/assets'),
        {
          index: false,
        }
      )
    );
  } else {
    viteServer = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(viteServer.middlewares);
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let base: string;
      let render: (
        url: string,
        options: RenderToPipeableStreamOptions
      ) => {
        stream: PipeableStream;
        preloadedState: MyStoreState;
      };

      let stream: (stream: NodeJS.WritableStream) => void;

      if (productionMode) {
        base = fs.readFileSync(
          path.resolve(dirName, 'dist/client/index.html'),
          'utf-8'
        );
        const pathToServerApp = './dist/server/ServerApp.tsx';
        render = (await import(pathToServerApp)).render;
      } else {
        base = fs.readFileSync(path.resolve(dirName, 'index.html'), 'utf-8');
        render = (await viteServer.ssrLoadModule('/src/ServerApp.tsx')).render;
        base = await viteServer.transformIndexHtml(url, base);
      }

      const resData = req.cookies.search;
      const parts = base.split(`<!--separate-->`);

      const rendered = render(url, {
        onShellReady() {
          res.write(parts[0]);
          stream(res);
        },
        async onAllReady() {
          const { preloadedState } = rendered;
          const characters = { ...preloadedState.characters, resData };
          const template = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
            { ...preloadedState, characters }
          ).replace(/</g, '\\u003c')}</script>`;
          const html = parts[1] ?? '';
          const templateHTML = template !== undefined ? template : '';
          res.write(html.replace(`<!--preloaded-state-->`, templateHTML));
          res.end();
        },
        onError(e) {
          console.error(e);
        },
      });

      stream = rendered.stream.pipe;
    } catch (error) {
      const e = error as Error;
      viteServer?.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`The server has been started http://localhost:${port}`);
  });
};

myServerCreation();
