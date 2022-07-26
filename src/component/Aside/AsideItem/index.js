import React from 'react'

export default function index({setMenuName,title}) {
  return (
    <a href="#" onClick={() => setMenuName(title)}>{title}</a>
  )
}
