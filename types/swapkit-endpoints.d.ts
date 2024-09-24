declare module '@swapkit/api/src/microgard/endpoints' {
  export function getTHORChainPools(
    period: import('@swapkit/api').PoolPeriod,
  ): Promise<import('@swapkit/api/src/microgard/types').PoolDetail[]>;
}
