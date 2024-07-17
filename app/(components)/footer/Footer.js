import Link from 'next/link'
import React from 'react'



export default function Footer() {
  return (
    <div>
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
          Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
          <a href='https://www.facebook.com/profile.php?id=100054756514985'><i className="fab fa-facebook-f"></i></a>
          <a href='https://github.com/abdullah60902'>      <i className="fab fa-instagram"></i></a>
          <a href='https://github.com/abdullah60902'>     <i className="fab fa-twitter"></i></a>
          <a href='https://github.com/abdullah60902'>     <i className="fab fa-linkedin"></i></a>


        </div>
        <p>Made with <i className="fas fa-heart"></i> by <Link href="/">Abdullah Developer</Link></p>
        <p>Copyright © 2024 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
      </section>
    </div>
  )
}
