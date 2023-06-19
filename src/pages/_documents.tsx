
import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document{
  render(){
    return(
      <Html>
        <Head>
          <title>12454325</title>
          <link rel="manifest" href="manifest.json"/>
          <link rel ='apple-touch-icon' href="/icon.png"/>
          <meta name="theme-color" content="#23232D"/>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
export default MyDocument