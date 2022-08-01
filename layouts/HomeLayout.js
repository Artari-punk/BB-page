import Head from 'next/head'

import { Navbar } from 'components'
import { DAppProvider } from '@usedapp/core'
import { chain } from '../utils/constants'

const config = {
  networks: [chain.network],
  readOnlyUrls: {
    [chain.network.chainId]: chain.rpc,
  },
  refresh: 'everyBlock',
}

function HomeLayout(props) {
  const { children, title } = props

  return (
    <div className="Home__bg">
      <Head>
        <title>{title}</title>
        <meta name="title" content="Bubbly NFT" />
        <meta
          name="description"
          content="Fun from Art | Function from App
        An NFT collection that awakens your childhood dreams + powerful AI app"
        />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="Bubbly NFT" />
        <meta
          property="og:description"
          content="Fun from Art | Function from App
        An NFT collection that awakens your childhood dreams + powerful AI app"
        />
        {/* <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
        <meta property="twitter:title" content="Bubbly NFT" />
        <meta
          property="twitter:description"
          content="Fun from Art | Function from App
        An NFT collection that awakens your childhood dreams + powerful AI app"
        />
        {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DAppProvider config={config}>
        <Navbar />
        {children}
      </DAppProvider>
    </div>
  )
}

export default HomeLayout
