import React from 'react'

function Header() {
  return (
    <div>
        <nav className='header'>
            <h1 className='heading'>E-commerces</h1>
            <ul className='flex'>
                <li>Home</li>
                <li>Products</li>
                <li>Account</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header