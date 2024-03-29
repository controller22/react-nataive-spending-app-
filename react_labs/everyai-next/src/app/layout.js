import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><a href="">  Web</a></h1>
        <ol>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/update/1">update</Link></li>
        </ol>
        {children}

        <ul>
          <li><Link rel="stylesheet" href="/create">Create</Link></li>
          <li><Link rel="stylesheet" href="/update/1">update</Link></li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  )
}
