import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/' >E-SHOP</Link>
    <form className="d-flex">
      <input className="search-control" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      <Link className='nav-link' to='/Login'>Login</Link>
      <a className='nav-link'><i class="fa-solid fa-cart-plus"></i></a>
    </form>
  </div>
</nav>
    )
}

export default Navbar