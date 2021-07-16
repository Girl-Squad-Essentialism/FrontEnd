import React from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const Footer = () => {
    return (
        <div>
            <Breadcrumb style={{ textAlign: "center" }}>
                <Breadcrumb.Item>
                    <a href="./signin" style={{ color: "#ffffff" }}>Sign In</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item style={{ color: "#ffffff" }}>Image</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="./contactus" style={{ color: "#ffffff" }}>Contact Us</a>
                </Breadcrumb.Item>
            </Breadcrumb>,
        </div>
    )
}

export default Footer;