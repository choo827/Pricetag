export function getCurrencySymbolFromString(s: string) {
  if (
    s.includes('$') ||
    s.includes('USD') ||
    s.includes('dollar') ||
    s.includes('usd')
  )
    return '$';

  if (s.includes('€')) return '€';

  if (
    s.includes('원') ||
    s.includes('krw') ||
    s.includes('KRW') ||
    s.includes('₩') ||
    s.includes('￦')
  )
    return '₩';

  if (s.includes('£')) return '£';

  if (
    s.includes('jpy') ||
    s.includes('JPY') ||
    s.includes('￥') ||
    s.includes('¥') ||
    s.includes('円')
  )
    return '¥';

  return null;
}
