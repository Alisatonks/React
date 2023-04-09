import { rest } from 'msw';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          created: '2017-11-04T20:19:09.017Z',
          episode: {
            0: 'https://rickandmortyapi.com/api/episode/25',
          },
          gender: 'Male',
          id: 10,
          image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
          location: {
            name: "Worldender's lair",
            url: 'https://rickandmortyapi.com/api/location/4',
          },
          name: 'jhfkjfh',
          origin: {
            name: 'unknown',
            url: '',
          },
          species: 'Human',
          status: 'Dead',
          type: 'Superhuman (Ghost trains summoner)',
          url: 'https://rickandmortyapi.com/api/character/10',
        },
      ])
    );
  }),
];

export default handlers;
