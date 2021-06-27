import { getParamByParam } from 'iso-country-currency';

export function getCurrencyBySymbol(
  symbol: string,
  defaultCurrency: string = 'USD'
) {
  try {
    return getParamByParam('symbol', symbol, 'currency');
  } catch {
    return defaultCurrency;
  }
}
