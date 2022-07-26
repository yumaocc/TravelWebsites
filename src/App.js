import React, { useState } from 'react'
import './App.css'
import twitter from './icons/twitter.svg'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import { CONTENT_INFO } from './content'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import Aside from './component/Aside'
export default function App() {
  const [open, setOpen] = useState(false)
  const [menuName, setMenuName] = useState('island')
  return (
    <div>
      <section className={open ? "main-structure active" : 'main-structure'}>
        <Header
          setOpen={setOpen}
          open={open}
        />
        <Content
          menuName={menuName}
          CONTENT_INFO={CONTENT_INFO}
        />
        <Footer
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
        />
      </section>
      <Aside setMenuName={setMenuName} />
    </div>
  )
}

