import React from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const Footer = () => {
    return (
        <div>
            <Breadcrumb style={{ textAlign: "center" }}>
                <Breadcrumb.Item>
                    <a href="./signin">Sign In</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Image</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="./contactus">Contact Us</a>
                </Breadcrumb.Item>
            </Breadcrumb>,
        </div>
    )
}

export default Footer;