import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KingKongDoge',
  defaultTitle: 'Blog | KingKongDoge',
  description:
    'Cheaper and faster than Uniswap? Discover KingKongDoge, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KingKongDoge',
    site: '@KingKongDoge',
  },
  openGraph: {
    title: '🥞 KingKongDoge - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by KingKongDoge), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://i.ibb.co/HV1DFBX/Screenshot-2023-03-15-at-12-09-16-PM.png' }],
  },
}
