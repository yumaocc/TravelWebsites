import React from 'react'

export default function index(props) {
    const {facebook ,instagram ,twitter} = props
  return (
    <footer>
    <a href="#"><img src={facebook} alt="facebook" /></a>
    <a href="#"><img src={instagram} alt="instagram" /></a>
    <a href="#"><img src={twitter} alt="twitter" /></a>
  </footer>
  )
}
