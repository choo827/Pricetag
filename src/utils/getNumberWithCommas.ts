export function getNumberWithCommas(x: string) {
  return parseFloat(x.replace(/[^\d.]*/g, ''));
}
