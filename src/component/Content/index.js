import React from 'react'
export default function index(props) {
    const {CONTENT_INFO ,menuName} = props
  return (
    <div className="content">
        {
            Object.keys(CONTENT_INFO).map(item => {
                return (
                    <video key={item} className={menuName === item ? 'active' : ""} src={CONTENT_INFO[item].src} autoPlay muted loop></video>
                )
            })
        }
          <div className={`video-overlay video-overlay-${menuName}`}></div>
          <section className="text-description">
            <h1>{CONTENT_INFO[menuName].h1}</h1>
            <h2>{CONTENT_INFO[menuName].h2}</h2>
            <p>{CONTENT_INFO[menuName].p}</p>
            <a href="#">点击</a>
          </section>
        </div>
  )
}
