import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: 'KingKongDoge',
  defaultTitle: 'KingKongDoge',
  description:
    'Cheaper and faster than Uniswap? Discover KingKongDoge, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KingKongDoge',
    site: '@KingKongDoge',
  },
  openGraph: {
    title: 'KingKongDoge - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'KingKong DOGE Swap, the ultimate decentralized exchange that offers advanced liquidity, swapping, farming, and pooling options. Join the exclusive community of KingKong DOGE and swap, farm, and pool to earn rewards while enjoying a seamless user experience.',
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
