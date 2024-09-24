import { type QuoteResponseRoute } from '@swapkit/api';
import { getTHORChainPools } from '@swapkit/api/src/microgard/endpoints';
import type { PoolDetail } from '@swapkit/api/src/microgard/types';

export const getNativeDecimal = (p: PoolDetail) => {
  return p.nativeDecimal;
};

export const getFees = (r: QuoteResponseRoute) => {
  return r.fees;
};

export const getTHORChainPoolsNativeDecimal = () => {
  return getTHORChainPools('30d').then((pools) =>
    pools.map((pool) => pool.nativeDecimal),
  );
};
