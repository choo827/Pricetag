import { getAllInfoByISO } from 'iso-country-currency';

export function setCurrencyByBrowserLanguage() {
  const language = navigator.language;
  const countryCode = language.substr(language.length - 2);
  const { currency } = getAllInfoByISO(countryCode);
  chrome.storage.sync.set({
    currency,
  });
  return currency;
}
