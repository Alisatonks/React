import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import FormCard from './FormCard';

describe('testing component FormCard', () => {
  const formCardData = {
    id: 123456789,
    title: 'Test Product',
    date: '2022-03-25',
    reason: 'Defect',
    concent: true,
    radio: 'Return money',
    inputFile: '/path/to/image.jpg',
  };

  it('should render card with correct data', () => {
    render(
      <Provider store={store}>
        <FormCard {...formCardData} />
      </Provider>
    );

    expect(screen.getByAltText('your img')).toBeInTheDocument();
    expect(
      screen.getByText(`Name of the product: ${formCardData.title}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Date of the purchase: ${formCardData.date}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Return reason: ${formCardData.reason}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Concent with return policy: Yes`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Return Option: ${formCardData.radio}`)
    ).toBeInTheDocument();
  });
});
