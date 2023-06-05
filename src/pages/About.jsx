import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div>About</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sint placeat veniam nemo libero incidunt molestias facilis velit voluptatum eveniet ullam quae, similique omnis suscipit expedita dolorum, soluta dolore explicabo?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dicta quisquam atque similique nam placeat quia nisi, laborum, illum a voluptates tempora magnam nobis blanditiis qui quo repellat. Ipsum, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia consequatur? Voluptates sapiente repellendus quod harum alias, expedita minus ad accusamus itaque ipsam dignissimos vero? Voluptatum facere saepe accusamus alias?</p>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/about/vision">Vision</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about/mision">Mision</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default About