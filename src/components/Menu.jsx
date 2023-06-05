import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    /* 
    Link usarlo cuando son rutas o enlaces internos de la pagina 
    y usar Anclas (a) solo cuando sean archivos a descargar o recursos externos
    */
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/price">Price</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users/1/type/admins">Users</Link>
            </li>
        </ul>
    )
}

export default Menu