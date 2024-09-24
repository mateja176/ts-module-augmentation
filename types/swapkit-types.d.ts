declare module '@swapkit/api/src/microgard/types' {
  // interface PoolDetail {
  //   nativeDecimal: string;
  // }
  export type PoolDetail = {
    annualPercentageRate: string;
    asset: string;
    assetDepth: string;
    assetPrice: string;
    assetPriceUSD: string;
    liquidityUnits: string;
    nativeDecimal: string;
    poolAPY: string;
    runeDepth: string;
    saversAPR: string;
    saversDepth: string;
    saversUnits: string;
    status: string;
    synthSupply: string;
    synthUnits: string;
    units: string;
    volume24h: string;
  };
}
