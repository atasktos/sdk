import { ChainId, ChainKey } from '../enums'

export const CHAIN_ID: { [chainKey in ChainKey]: ChainId } = {
  [ChainKey.ETHEREUM]: ChainId.ETHEREUM,
  [ChainKey.RINKEBY]: ChainId.RINKEBY,
  [ChainKey.RINKEBY_SANDBOX]: ChainId.RINKEBY_SANDBOX,
  [ChainKey.KOVAN]: ChainId.KOVAN,
  [ChainKey.KOVAN_SANDBOX]: ChainId.KOVAN_SANDBOX,
  [ChainKey.GOERLI]: ChainId.GOERLI,
  [ChainKey.GOERLI_SANDBOX]: ChainId.GOERLI_SANDBOX,
  [ChainKey.BSC]: ChainId.BSC,
  [ChainKey.BSC_TESTNET]: ChainId.BSC_TESTNET,
  [ChainKey.BSC_TESTNET_SANDBOX]: ChainId.BSC_TESTNET_SANDBOX,
  [ChainKey.AVALANCHE]: ChainId.AVALANCHE,
  [ChainKey.FUJI]: ChainId.FUJI,
  [ChainKey.FUJI_SANDBOX]: ChainId.FUJI_SANDBOX,
  [ChainKey.POLYGON]: ChainId.POLYGON,
  [ChainKey.MUMBAI]: ChainId.MUMBAI,
  [ChainKey.MUMBAI_SANDBOX]: ChainId.MUMBAI_SANDBOX,
  [ChainKey.ARBITRUM]: ChainId.ARBITRUM,
  [ChainKey.ARBITRUM_RINKEBY]: ChainId.ARBITRUM_RINKEBY,
  [ChainKey.ARBITRUM_GOERLI]: ChainId.ARBITRUM_GOERLI,
  [ChainKey.ARBITRUM_RINKEBY_SANDBOX]: ChainId.ARBITRUM_RINKEBY_SANDBOX,
  [ChainKey.OPTIMISM]: ChainId.OPTIMISM,
  [ChainKey.OPTIMISM_KOVAN]: ChainId.OPTIMISM_KOVAN,
  [ChainKey.OPTIMISM_GOERLI]: ChainId.OPTIMISM_GOERLI,
  [ChainKey.OPTIMISM_KOVAN_SANDBOX]: ChainId.OPTIMISM_KOVAN_SANDBOX,
  [ChainKey.FANTOM]: ChainId.FANTOM,
  [ChainKey.FANTOM_TESTNET]: ChainId.FANTOM_TESTNET,
  [ChainKey.FANTOM_TESTNET_SANDBOX]: ChainId.FANTOM_TESTNET_SANDBOX,
  [ChainKey.SWIMMER]: ChainId.SWIMMER,
  [ChainKey.SWIMMER_TESTNET]: ChainId.SWIMMER_TESTNET,
  [ChainKey.SWIMMER_TESTNET_SANDBOX]: ChainId.SWIMMER_TESTNET_SANDBOX,
  [ChainKey.DFK]: ChainId.DFK,
  [ChainKey.DFK_TESTNET]: ChainId.DFK_TESTNET,
  [ChainKey.DFK_TESTNET_SANDBOX]: ChainId.DFK_TESTNET_SANDBOX,
  [ChainKey.HARMONY]: ChainId.HARMONY,
  [ChainKey.HARMONY_TESTNET]: ChainId.HARMONY_TESTNET,
  [ChainKey.HARMONY_TESTNET_SANDBOX]: ChainId.HARMONY_TESTNET_SANDBOX,
  [ChainKey.ARCANA_TESTNET]: ChainId.ARCANA_TESTNET,
  [ChainKey.ARCANA_TESTNET_SANDBOX]: ChainId.ARCANA_TESTNET_SANDBOX,
  [ChainKey.DEXALOT_TESTNET]: ChainId.DEXALOT_TESTNET,
  [ChainKey.DEXALOT_TESTNET_SANDBOX]: ChainId.DEXALOT_TESTNET_SANDBOX,
  [ChainKey.CASTLECRUSH_TESTNET]: ChainId.CASTLECRUSH_TESTNET,
  [ChainKey.CASTLECRUSH_TESTNET_SANDBOX]: ChainId.CASTLECRUSH_TESTNET_SANDBOX,
  [ChainKey.CELO]: ChainId.CELO,
  [ChainKey.CELO_TESTNET]: ChainId.CELO_TESTNET,
  [ChainKey.CELO_TESTNET_SANDBOX]: ChainId.CELO_TESTNET_SANDBOX,
  [ChainKey.MOONBEAM]: ChainId.MOONBEAM,
  [ChainKey.MOONBEAM_TESTNET]: ChainId.MOONBEAM_TESTNET,
  [ChainKey.MOONBEAM_TESTNET_SANDBOX]: ChainId.MOONBEAM_TESTNET_SANDBOX,
  [ChainKey.GNOSIS_TESTNET]: ChainId.GNOSIS_TESTNET,
  [ChainKey.GNOSIS_TESTNET_SANDBOX]: ChainId.GNOSIS_TESTNET_SANDBOX,
  [ChainKey.BOBA]: ChainId.BOBA,
  [ChainKey.BOBA_TESTNET]: ChainId.BOBA_TESTNET,
  [ChainKey.BOBA_TESTNET_SANDBOX]: ChainId.BOBA_TESTNET_SANDBOX,
  [ChainKey.PORTAL_TESTNET]: ChainId.PORTAL_TESTNET,
  [ChainKey.PORTAL_TESTNET_SANDBOX]: ChainId.PORTAL_TESTNET_SANDBOX,
  [ChainKey.AURORA]: ChainId.AURORA,
  [ChainKey.AURORA_TESTNET]: ChainId.AURORA_TESTNET,
  [ChainKey.AURORA_TESTNET_SANDBOX]: ChainId.AURORA_TESTNET_SANDBOX,
  [ChainKey.APTOS]: ChainId.APTOS,
  [ChainKey.APTOS_TESTNET]: ChainId.APTOS_TESTNET,
  [ChainKey.APTOS_TESTNET_SANDBOX]: ChainId.APTOS_TESTNET_SANDBOX,
}
