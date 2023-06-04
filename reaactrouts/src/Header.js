

import React from 'react'

export default function Header() {
  return (
    <div className='navbar'>
            <img src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=250x250' />
            <h1>Save Mart</h1>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <button>Login</button>
            <button>Cart</button>
        </div>
  )
}




