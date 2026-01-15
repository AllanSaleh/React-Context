import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import "./Card.css"

const Card = () => {

  const {isDarkMode} = useTheme();

  return (
    <div className={isDarkMode ? 'card cardDark': 'card cardLight'}>
      <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" />
      <h2>Card Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis odio repudiandae mollitia, quasi hic incidunt harum veniam atque commodi.</p>
    </div>
  )
}

export default Card