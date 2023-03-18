import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import CardBtns from './CardBtns';
import { WrappedApp } from '../../App';
import Card from './Card';
import cardsData from '../../utils/cardsData';

describe('Card component', () => {
  it('Checks that there is an buy btns on the cards', () => {
    render(
      <HashRouter>
        <CardBtns />
      </HashRouter>
    );
    expect(screen.findAllByText(/buy/i));
  });
  it('Checks that there is an details on cards', () => {
    render(
      <HashRouter>
        <CardBtns />
      </HashRouter>
    );
    expect(screen.findAllByText(/details/i));
  });
  it('Checks that there is an alt on images on the carts', () => {
    render(<WrappedApp />);
    expect(screen.findAllByAltText(/product/i));
  });
  it('Checks that rendered all 95 details buttons', () => {
    render(<WrappedApp />);
    const detailsBtns = screen.queryAllByText(/details/i);
    expect(detailsBtns.length).toBe(cardsData.products.length);
  });
  it('Checks that on one rendered card there is an right text content', () => {
    const card = render(
      <HashRouter>
        <Card
          source="123"
          price={12}
          name="Apple"
          brand="brand"
          category="phones"
          discount={15}
          rating={5}
          stock={10}
        />
      </HashRouter>
    );
    expect(card.queryByText('Apple')).toBeInTheDocument();
    expect(card.queryByText('brand')).toBeInTheDocument();
  });
});
