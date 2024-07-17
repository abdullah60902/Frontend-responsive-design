"use client"
import { useState } from 'react';
import Link from 'next/link';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(true);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    
    <div>
      <section id='ty'>
        <nav>
          <Link href="/" className="logo">
            Xplore
            <i className="fab fa-staylinked"></i>kill
          </Link>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Course">Course</Link></li>
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Contact">Contact</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
      </section>
    </div>
  );
}
