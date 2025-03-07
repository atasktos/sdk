import { ChainId } from '../enums'

export const RPCS: { [chainId in ChainId]: string[] } = {
  [ChainId.ETHEREUM]: [
    'https://main-rpc.linkpool.io',
    'https://main-light.eth.linkpool.io',
    'https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79',
    'https://eth-rpc.gateway.pokt.network',
    'https://cloudflare-eth.com',
    'https://mainnet-nethermind.blockscout.com',
    'https://rpc.flashbots.net',
    'https://mainnet.infura.io/v3/',
  ],
  [ChainId.RINKEBY]: ['https://rinkeby-light.eth.linkpool.io'],
  [ChainId.RINKEBY_SANDBOX]: ['https://rinkeby-light.eth.linkpool.io'],
  [ChainId.KOVAN]: [
    'http://kovan.poa.network:8545',
    'https://kovan.poa.network'
  ],
  [ChainId.KOVAN_SANDBOX]: [
    'http://kovan.poa.network:8545',
    'https://kovan.poa.network'
  ],
  [ChainId.GOERLI]: [
    'https://rpc.goerli.mudit.blog/'
  ],
  [ChainId.GOERLI_SANDBOX]: [
    'https://rpc.goerli.mudit.blog/'
  ],
  [ChainId.BSC]: [
    'https://rpc-bsc.bnb48.club',
    'https://bsc-dataseed2.ninicoin.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed4.binance.org',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.ninicoin.io',
    'https://bsc-dataseed1.defibit.io',
    'https://binance.nodereal.io',
    'https://bsc-dataseed3.binance.org',
    'https://bsc-dataseed.binance.org',
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed4.ninicoin.io',
    'https://bsc-dataseed4.defibit.io',
  ],
  [ChainId.BSC_TESTNET]: [
    'https://data-seed-prebsc-2-s3.binance.org:8545',
    'https://data-seed-prebsc-1-s2.binance.org:8545',
    'https://data-seed-prebsc-2-s2.binance.org:8545',
  ],
  [ChainId.BSC_TESTNET_SANDBOX]: [
    'https://data-seed-prebsc-2-s3.binance.org:8545',
    'https://data-seed-prebsc-1-s2.binance.org:8545',
    'https://data-seed-prebsc-2-s2.binance.org:8545',
  ],
  [ChainId.AVALANCHE]: ['https://api.avax.network/ext/bc/C/rpc'],
  [ChainId.FUJI]: ['https://api.avax-test.network/ext/bc/C/rpc'],
  [ChainId.FUJI_SANDBOX]: ['https://api.avax-test.network/ext/bc/C/rpc'],
  [ChainId.POLYGON]: [
    'https://poly-rpc.gateway.pokt.network',
    'https://polygon-rpc.com',
    'https://rpc-mainnet.matic.quiknode.pro',
    'https://rpc-mainnet.matic.network',
    'https://matic-mainnet.chainstacklabs.com',
    'https://matic-mainnet-full-rpc.bwarelabs.com',
    'https://matic-mainnet-archive-rpc.bwarelabs.com',
  ],
  [ChainId.MUMBAI]: ['https://rpc-mumbai.maticvigil.com', 'https://matic-mumbai.chainstacklabs.com'],
  [ChainId.MUMBAI_SANDBOX]: ['https://rpc-mumbai.maticvigil.com', 'https://matic-mumbai.chainstacklabs.com'],
  [ChainId.ARBITRUM]: ['https://arb1.arbitrum.io/rpc'],
  [ChainId.ARBITRUM_RINKEBY]: ['https://rinkeby.arbitrum.io/rpc'],
  [ChainId.ARBITRUM_GOERLI]: ['https://goerli-rollup.arbitrum.io/rpc/'],
  [ChainId.ARBITRUM_RINKEBY_SANDBOX]: ['https://rinkeby.arbitrum.io/rpc'],
  [ChainId.OPTIMISM]: ['https://mainnet.optimism.io'],
  [ChainId.OPTIMISM_KOVAN]: ['https://kovan.optimism.io/'],
  [ChainId.OPTIMISM_GOERLI]: ['https://goerli.optimism.io/'],
  [ChainId.OPTIMISM_KOVAN_SANDBOX]: ['https://kovan.optimism.io/'],
  [ChainId.FANTOM]: [
    'https://rpc.ftm.tools',
    'https://rpc.fantom.network',
    'https://rpcapi.fantom.network',
    'https://rpc3.fantom.network',
    'https://rpc2.fantom.network',
  ],
  [ChainId.FANTOM_TESTNET]: ['https://rpc.testnet.fantom.network/'],
  [ChainId.FANTOM_TESTNET_SANDBOX]: ['https://rpc.testnet.fantom.network/'],
  [ChainId.SWIMMER]: ['https://subnets.avax.network/swimmer/mainnet/rpc'],
  [ChainId.SWIMMER_TESTNET]: ['https://subnets.avax.network/swimmer/testnet/rpc'],
  [ChainId.SWIMMER_TESTNET_SANDBOX]: ['https://subnets.avax.network/swimmer/testnet/rpc'],
  [ChainId.DFK]: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
  [ChainId.DFK_TESTNET]: ['https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc'],
  [ChainId.DFK_TESTNET_SANDBOX]: ['https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc'],
  [ChainId.HARMONY]: ['https://api.harmony.one', 'https://api.s0.t.hmny.io/'],
  [ChainId.HARMONY_TESTNET]: [
    'https://api.s0.b.hmny.io/',
    'https://api.s1.b.hmny.io',
    'https://api.s0.backup1.b.hmny.io/',
    'https://api.s0.pops.one/',
  ],
  [ChainId.HARMONY_TESTNET_SANDBOX]: [
    'https://api.s0.b.hmny.io/',
    'https://api.s1.b.hmny.io',
    'https://api.s0.backup1.b.hmny.io/',
    'https://api.s0.pops.one/',
  ],
  [ChainId.ARCANA_TESTNET]: ['https://blockchain-dev.arcana.network/'],
  [ChainId.ARCANA_TESTNET_SANDBOX]: ['https://blockchain-dev.arcana.network/'],
  [ChainId.DEXALOT_TESTNET]: [
    'https://subnets.avax.network/dexalot/testnet/rpc',
    'https://node.dexalot-test.com/ext/bc/XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde/rpc',
  ],
  [ChainId.DEXALOT_TESTNET_SANDBOX]: [
    'https://subnets.avax.network/dexalot/testnet/rpc',
    'https://node.dexalot-test.com/ext/bc/XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde/rpc',
  ],
  [ChainId.CASTLECRUSH_TESTNET]: [
    'https://subnets.avax.network/castle-crush/testnet/rpc',
  ],
  [ChainId.CASTLECRUSH_TESTNET_SANDBOX]: [
    'https://subnets.avax.network/castle-crush/testnet/rpc',
  ],
  [ChainId.CELO]: ['https://forno.celo.org','https://rpc.ankr.com/celo'],
  [ChainId.CELO_TESTNET]: ['https://alfajores-forno.celo-testnet.org'],
  [ChainId.CELO_TESTNET_SANDBOX]: ['https://alfajores-forno.celo-testnet.org'],
  [ChainId.MOONBEAM]: ['https://moonbeam.public.blastapi.io','https://moonbeam-rpc.dwellir.com','https://rpc.ankr.com/moonbeam','https://moonbeam.api.onfinality.io/public','https://moonbeam-mainnet.gateway.pokt.network/v1/lb/629a2b5650ec8c0039bb30f0'],
  [ChainId.MOONBEAM_TESTNET]: [
    'https://rpc.api.moonbase.moonbeam.network',
    'https://moonbase-alpha.public.blastapi.io',
    'https://moonbeam-alpha.api.onfinality.io/public'
  ],
  [ChainId.MOONBEAM_TESTNET_SANDBOX]: [
    'https://rpc.api.moonbase.moonbeam.network',
    'https://moonbase-alpha.public.blastapi.io',
    'https://moonbeam-alpha.api.onfinality.io/public'
  ],
  [ChainId.GNOSIS_TESTNET]: [
    'https://optimism.gnosischain.com',
  ],
  [ChainId.GNOSIS_TESTNET_SANDBOX]: [
    'https://optimism.gnosischain.com',
  ],
  [ChainId.BOBA]: [
    'https://mainnet.boba.network',
    'https://lightning-replica.boba.network',
    'https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f'
  ],
  [ChainId.BOBA_TESTNET]: [
    'https://rinkeby.boba.network/'
  ],
  [ChainId.BOBA_TESTNET_SANDBOX]: [
    'https://rinkeby.boba.network/'
  ],
  [ChainId.PORTAL_TESTNET]: ['http://3.212.233.100:9650/ext/bc/29oXNywCkGdJCuYikXkkqG6Pe5Q8tuS5VfyLHNGfeqmDzBoTPq/rpc'],
  [ChainId.PORTAL_TESTNET_SANDBOX]: ['http://3.212.233.100:9650/ext/bc/29oXNywCkGdJCuYikXkkqG6Pe5Q8tuS5VfyLHNGfeqmDzBoTPq/rpc'],
  [ChainId.AURORA]: ['https://mainnet.aurora.dev'],
  [ChainId.AURORA_TESTNET]: ['https://testnet.aurora.dev/'],
  [ChainId.AURORA_TESTNET_SANDBOX]: ['https://testnet.aurora.dev/'],
  [ChainId.APTOS]: ['https://fullnode.devnet.aptoslabs.com/v1'],
  [ChainId.APTOS_TESTNET]: ['https://fullnode.devnet.aptoslabs.com/v1'],
  [ChainId.APTOS_TESTNET_SANDBOX]: ['https://fullnode.devnet.aptoslabs.com/v1'],
  [ChainId.METIS]: ['https://andromeda.metis.io/?owner=1088'],
  [ChainId.METIS_TESTNET]: ['https://goerli.gateway.metisdevops.link'],
}
