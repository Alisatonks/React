import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../../redux/store';
import FormPage from '../../pages/FormPage';

describe('FormComponentHook', () => {
  it('should render all form fields', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(
      screen.getByPlaceholderText('Enter product name')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Enter purchase date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose return reason')).toBeInTheDocument();
    expect(
      screen.getByLabelText(
        'I have read the terms of Return Policy and agree with it'
      )
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Return money')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Exchange to another product')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Choose your image')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should show validation errors when form fields are not filled correctly', async () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    expect(
      await screen.findByText('Please enter the past date')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please choose the reason of return')
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        'Please read the return policy and if you agree mark the checkbox'
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please choose return option')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please choose an image')
    ).toBeInTheDocument();
  });
});
