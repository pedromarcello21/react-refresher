import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <NavLink style = {active => active ? {fontStyle: 'italic', color:'white'} : null } to="/" >Home</NavLink>
        <NavLink style = {active => active ? {fontStyle: 'italic', color:'white'} : null } to="/favorites">Favorites</NavLink>

    </div>
  )
}
