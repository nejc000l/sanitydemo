import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto">
      <div className="flex items-center space-x-5">
          <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
          </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer hover:bg-gray-100 p-2 hover:rounded-full">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full text-green-600 cursor-pointer hover:bg-gray-50">Get Started</h3>
      </div>
    </header>
  )
}

export default Header
