import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import FormCardList from './FormCardList';

describe('FormCardList', () => {
  const formCards = [
    {
      id: 1,
      title: 'Test Product 1',
      date: '2022-03-25',
      reason: 'Defect',
      concent: true,
      radio: 'Return money',
      inputFile: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Test Product 2',
      date: '2022-03-26',
      reason: 'Wrong size',
      concent: false,
      radio: 'Exchange for another size',
      inputFile: '/path/to/image2.jpg',
    },
  ];

  it('should render a list of FormCards', () => {
    render(
      <Provider store={store}>
        <FormCardList formCards={formCards} />
      </Provider>
    );

    expect(screen.getByText(/test Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test Product 2/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
