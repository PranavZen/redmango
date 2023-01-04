import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
    
    const [sidebarTop, setSidebarTop] = useState(undefined);
   
    useEffect(() => {
      const sidebarEl = document.querySelector('.sideMenuWrap').getBoundingClientRect();
    
      setSidebarTop(sidebarEl.top);
    }, []);
   
    useEffect(() => {
      if (!sidebarTop) return;
   
      window.addEventListener('scroll', isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };// eslint-disable-next-line
    }, [sidebarTop]);
   
    const isSticky = (e) => {
      const sidebarEl = document.querySelector('.sideMenuWrap');
      const scrollTop = window.scrollY;
      if (scrollTop >= sidebarTop - 10) {
        sidebarEl.classList.add('is-sticky');
      } else {
        sidebarEl.classList.remove('is-sticky');
      }
    }
  return (
    <div className="col-md-2 pe-3">
    <div className="sideMenuWrap">
      <h3>Product Types</h3>
      <ul>
        <li>
          <Link to="">
            <span>Earings</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Rings</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Pendent</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Kadas</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar