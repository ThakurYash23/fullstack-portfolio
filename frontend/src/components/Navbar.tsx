// Example: from your header or navbar
'use client'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}