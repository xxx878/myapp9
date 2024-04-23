import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <div>
      <div className={style.header}>
        <div className="container">
            <a href="" className={style.link}>Museum</a>
            <nav className="header_link">
                <a href="" className={style.link}>Vincent Willem van Gogh</a>
                <a href="" className={style.link}>Pablo Picasso</a>
                <a href="" className={style.link}>Salvador Dalí</a>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
