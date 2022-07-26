import React from 'react'

export default function index(props) {
    const {setOpen ,open} = props
  return (
    <header>
        <a href="#">
          <div className="logo">Travel</div>
        </a>
        <div className={open ? "menu-logo active" : "menu-logo"} onClick={() => setOpen(!open)}></div>
      </header>
  )
}
