import { Provider } from 'react-redux';
import { describe, vi, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import store from '../redux/store';
import Home from '../pages/Home';
import ModalCard from './modal/ModalCard';

const fetchMocker = createFetchMock(vi);
const mockSetIsModalOpen = vi.fn();
const response = [
  {
    created: '2017-11-04T20:19:09.017Z',
    episode: {
      0: 'https://rickandmortyapi.com/api/episode/25',
    },
    gender: 'Male',
    id: 10,
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    location: {
      name: 'Alan Rails',
      url: 'https://rickandmortyapi.com/api/location/4',
    },
    name: 'Alan Rails',
    origin: {
      name: 'unknown',
      url: '',
    },
    species: 'Human',
    status: 'Dead',
    type: 'Superhuman (Ghost trains summoner)',
    url: 'https://rickandmortyapi.com/api/character/10',
  },
];

fetchMocker.enableMocks();

describe('API requests', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetch and display the characters name on a Card', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: response }));
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    await screen.findByText('Alan Rails');
  });
  it('fetch and display the characters status on a Card', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: response }));
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    await screen.findByText('status: Dead');
  });
  it('Modal window is created and there is a cross button on it', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: response }));
    render(
      <Provider store={store}>
        <ModalCard id={10} setIsModalOpen={mockSetIsModalOpen} />
      </Provider>
    );
    await screen.findByLabelText('Close Modal');
  });
  it('fetch for a single character and display gender on the screen', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: response }));
    waitFor(() =>
      render(
        <Provider store={store}>
          <ModalCard id={10} setIsModalOpen={mockSetIsModalOpen} />
        </Provider>
      )
    );
    waitFor(async () => screen.findByText('species: Human'));
  });
});
