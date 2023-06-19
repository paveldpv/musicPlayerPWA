import './globals.css'




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="manifest" href="manifest.json"/>
      <title>radio</title>
      <body  >{children}</body>
    </html>
  )
}
