import { getCurrency } from '../utils/getCurrency';
import { getCurrencyBySymbol } from '../utils/getCurrencyBySymbol';
import { getCurrencySymbolFromString } from '../utils/getCurrencySymbolFromString';
import { getNumberWithCommas } from '../utils/getNumberWithCommas';
import { isInParentNode } from '../utils/isInParentNode';
import { EXCHANGE_ELEMENT_ID } from './constants';
import { removeExchangeComponent, renderExchange } from './Exchange';

const exchangeElement = document.createElement('div');
exchangeElement.id = EXCHANGE_ELEMENT_ID;
exchangeElement.style.position = 'fixed';
exchangeElement.style.zIndex = `${10000}`;
document.body.appendChild(exchangeElement);

// 외부변수 하나만 참조해서 순수함수가 아니라도 괜찮을 듯 하다. exchangeElement
async function renderExchangeElementHandler(event: MouseEvent) {
  if (
    exchangeElement.hasChildNodes() &&
    isInParentNode(exchangeElement, event.target as Node)
  ) {
    return;
  }
  exchangeElement.style.left = `${event.clientX}px`;
  exchangeElement.style.top = `${event.clientY}px`;

  // 스크롤을 이상하게 한 경우
  // Remove current element if yours selection is not focus on to exchange target
  const selection = document.getSelection();
  if (!selection || selection?.type === 'Caret') {
    removeExchangeComponent();
    return;
  }

  const selectionString = selection.toString();
  const price = getNumberWithCommas(selectionString);
  // 스크롤 한 곳에 숫자가 없다고 판단한 경우
  if (!price) {
    removeExchangeComponent();
    return;
  }

  const symbol = getCurrencySymbolFromString(selectionString);
  // 스크롤 한 곳에 돈 기호가 없을 경우
  if (!symbol) {
    removeExchangeComponent();
    return;
  }
  const currency = getCurrencyBySymbol(symbol);
  const transformCurrency = await getCurrency();

  renderExchange(price, currency, transformCurrency);
}
document.addEventListener('mouseup', renderExchangeElementHandler);
