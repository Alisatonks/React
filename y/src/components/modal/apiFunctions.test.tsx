import { describe } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../cards/Card';

describe('API requests', () => {
  test('fetch and display a single character', async () => {
    const { findByText } = render(
      <Card
        name="Alan Rails"
        image="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        status="Dead"
        id={10}
      />
    );
    const element = await findByText('Alan Rails');
    expect(element).toBeInTheDocument();
  });
  test('fetch and display a single character', async () => {
    const { findByText } = render(
      <Card
        name="Alan Rails"
        image="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        status="Dead"
        id={10}
      />
    );
    const status = await findByText('status: Dead');
    expect(status).toBeInTheDocument();
  });
});
