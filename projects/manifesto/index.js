const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require("../helper/unknownTokens");
const { deadFrom } = require('../mosquitos-finance');
const lps = [
  '0xF65af1E61D7aC87d73E347D17E369Dc2118E9517',
]

module.exports = {
  hallmarks: [
    [1676332800, "Rug Pull"]
  ],
  deadFrom: 1676332800,
  misrepresentedTokens: true,
  canto: {
    tvl: sumTokensExport({
      owner: '0x20636bd0E15be0e1faADE1b27f568e642f59814E',
      tokens: [
        '0x4e71a2e537b7f9d9413d3991d37958c0b5e1e503',
        ADDRESSES.canto.WCANTO,
        ADDRESSES.functionx.PURSE,
        ADDRESSES.functionx.WFX,
        ...lps,
      ],
      useDefaultCoreAssets: true,
    }),
    staking: sumTokensExport({
      owner: '0xbE718E9431c4E25F4Af710f085a475074e24D7Cd',
      tokens: [
        '0xfC65316f26949B268f82519256C159B23ACC938F',
      ],
      lps,
      useDefaultCoreAssets: true,
    }),
  }
}
