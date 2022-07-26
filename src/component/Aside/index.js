import React from 'react'
import AsideItem from './AsideItem'
export default function index(props) {
    const { setMenuName } = props
    const element = ['island', 'spring', 'summer', 'autumn', 'winter']
    return (
        <section className="aside-menu">
            {
                element.map(item =>
                    <AsideItem
                        key={item}
                        title={item}
                        setMenuName={setMenuName}
                    />)
            }
        </section>
    )
}
