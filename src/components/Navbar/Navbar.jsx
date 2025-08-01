import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';


const Navbar = () => {
  const [menu, setMenu] = useState("Menu");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <span className="site-name">Food Express</span>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li> 
        <li onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}>About us</li>   
       
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""  />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
       <button>sign in</button>
       </div>

      </div>
      

    
  );
};

export default Navbar;
