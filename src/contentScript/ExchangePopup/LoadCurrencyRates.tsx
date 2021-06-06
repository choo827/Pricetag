import React, { FC, useEffect } from 'react';

export interface LoadCurrencyRatesProps {
  price: number;
  currency: string;
  transformCurrency: string;
}
export const LoadCurrencyRates: FC<LoadCurrencyRatesProps> = () => {
  // TODO: currency rates 로드하는 함수 호출, 마지막 호출 시간으로부터 1시간이 지났다면 재호출
  useEffect(() => {
    // 여기서 API를 호출하고 값을 가져올지 ? 아니면 익숙한 방식인 react-query를 사용할지 ?
    // 그냥 API를 만들자, 그게 나아보임, chrome extenstion이라서 fetch를 사용해도 될 것 같은 느낌이다.
  }, []);
  return <></>;
};
