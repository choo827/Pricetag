import React from 'react';
import ReactDOM from 'react-dom';
import { EXCHANGE_ELEMENT_ID } from './constants';
import { ExchangePopup } from './ExchangePopup';

export const renderExchange = (
  price: number,
  currency: string,
  transformCurrency: string
) => {
  ReactDOM.render(
    <ExchangePopup
      price={price}
      currency={currency}
      transformCurrency={transformCurrency}
    />,
    document.getElementById(EXCHANGE_ELEMENT_ID)
  );
};

export const removeExchangeComponent = () => {
  const element = document.getElementById(EXCHANGE_ELEMENT_ID);
  if (!element) return;
  ReactDOM.unmountComponentAtNode(element);
};
