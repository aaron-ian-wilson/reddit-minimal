import React from "react";
import '../styles/Root.css';
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
        <Nav/>
        <div className="body">
            <div className="sidebar-left">

            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="sidebar-right">

            </div>
        </div>
        </>
    )
};

export default Root;