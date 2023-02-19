import React from 'react';
import logo from "../../assets/stackoverflow-official.svg";
import search from "../../assets/searchengin.svg";
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import "./Navbar.css";


const Navbar = () => {

   var User = null;
  return (
    <nav className='main-nav'>
        <div className='navbar'>
           <Link to="/" className="nav-item nav-logo shadow">
              <img src={logo} alt="stack logo" />
           </Link>     
           <Link to="/about" className="nav-item nav-btn effect">About</Link>
           <Link to="/products" className="nav-item nav-btn effect">Products</Link>
           <Link to="/teams" className="nav-item nav-btn effect">For Teams</Link>
           <form>
             <img src={search} alt="search" width="20px" className='search-icon' />
             <input type="text" placeholder='Search...' />
           </form>
           {User === null ? <Link to="/auth" className= "nav-item nav-links">Log in</Link> :
           <>
           <Link to="/userprofile" style={{textDecoration: "none"}}><Avatar  backgroundColor="#191970" px="10px" py="7px" borderRadius="50%" color="white">M</Avatar></Link>
           <button className='nav-item nav-links'>Log out</button>
           </>
           }
           
        </div>
    </nav>
  )
}

export default Navbar;