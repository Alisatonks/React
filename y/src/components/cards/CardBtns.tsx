import React from 'react';

class CardBtns extends React.PureComponent {
  render() {
    return (
      <div className="btns">
        <button className="btns__details" type="submit">
          Details
        </button>
        <button className="btns__buy" type="submit">
          Buy
        </button>
      </div>
    );
  }
}
export default CardBtns;
