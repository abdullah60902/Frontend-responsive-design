import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Comman(props) {
  return (
    <div>
        <section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
        
                <i className="fa fa-times" ></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Course">Course</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
        
        </nav>
        <h1 className='ctah1'>{props.tittel}</h1>
    </section>
    </div>
  )
}
