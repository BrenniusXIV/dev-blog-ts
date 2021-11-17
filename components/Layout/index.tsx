import React, { Component, ReactNode } from "react"
import Navbar from "../Navbar"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
    console.log(typeof Navbar)
    return (
        <div className="layout">
            <Navbar className="navbar"/>
            {children}
        </div>
    )
}

export default Layout