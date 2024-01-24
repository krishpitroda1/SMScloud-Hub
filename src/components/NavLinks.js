import React from 'react'
import { Link } from 'react-router-dom'
const NavLinks = () => {
    const links=[{name:'About Us'},{name:'Services'},{name:'Careers'},{name:'Events'},{name:'Blogs'},{name:'Contact US'}];
    return(
        <>
        {links.map((Link)=>(
            <div>
                <div>
                    <h1>{Link.name}</h1>
                </div>
            </div>
        ))}
        </>
    )
}

export default NavLinks
