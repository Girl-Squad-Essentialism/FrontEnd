import React from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const Footer = () => {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="./SignInForm">Sign In</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Image</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="./ContactUs">Contact Us</a>
                </Breadcrumb.Item>
            </Breadcrumb>,
        </div>
    )
}

export default Footer;