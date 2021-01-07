import React from 'react'

const Navbar = () => {
    const title = 'React Simple Blog';
    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <a href="#">Home</a>
                <a className="blog-link" href="#">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar
