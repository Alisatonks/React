import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import WrappedApp from './App';

export default function render(
  url: string,
  opts?: RenderToPipeableStreamOptions
) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <WrappedApp />
    </StaticRouter>,
    opts
  );
  return stream;
}
