import { setCurrencyByBrowserLanguage } from './setCurrencyByBrowserLanguage';

export async function getCurrency() {
  return new Promise<string>(resolve =>
    chrome.storage.sync.get(item => {
      const currency: string = item.currency;
      if (!currency) return resolve(setCurrencyByBrowserLanguage());
      return resolve(currency);
    })
  );
}
