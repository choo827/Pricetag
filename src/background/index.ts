// 항시동작하는 스크립트
// 백그라운드 작업 담당
// 주기적으로 최신의 환전 금액 받아오기
import { setCurrencyByBrowserLanguage } from '../utils/setCurrencyByBrowserLanguage';

type Reason = 'install' | 'update' | 'chrome_update' | 'shared_module_update';
chrome.runtime.onInstalled.addListener(details => {
  const reason = details.reason as Reason;
  if (reason !== 'install') return;
  setCurrencyByBrowserLanguage();
});
