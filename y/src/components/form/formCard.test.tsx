/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
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
    render(<FormCard {...formCardData} />);

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
