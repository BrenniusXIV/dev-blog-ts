import React from "react"
import Link from 'next/link'



type NavbarProps = {
    className: string;
}

const Navbar = ({ className } : NavbarProps): JSX.Element => {
    return (
        <div className={className}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/profile">
                <a>Profile</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: space-evenly;
                    border: 5px dashed black;
                }
                a {
                    color: white;
                    background-color: blue;
                    padding: 10px;
                    margin: 5px;
                    border: 1px solid lightblue;
                }
                a:hover {
                    color: red;
                    background-color: pink;
                    border: 1px dashed purple;
                }
            `}</style>
        </div>
        
    )
}

export default Navbar