import React, { FC } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadCurrencyRates } from './LoadCurrencyRates';

interface ExchangePopupProps {
  price: number;
  currency: string;
  transformCurrency: string;
}
export const ExchangePopup: FC<ExchangePopupProps> = ({
  price,
  currency,
  transformCurrency,
}) => (
  <ErrorBoundary>
    <LoadCurrencyRates
      price={price}
      currency={currency}
      transformCurrency={transformCurrency}
    />
  </ErrorBoundary>
);
