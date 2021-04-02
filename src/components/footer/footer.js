import React from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const Footer = () => {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="./signInForm">Sign In</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Image</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="./contactUs">Contact Us</a>
                </Breadcrumb.Item>
            </Breadcrumb>,
        </div>
    )
}

export default Footer;