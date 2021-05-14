import React from "react";
import "../../App.css";
import 'antd/dist/antd.css';
import { Menu, Typography } from 'antd';
import {
    LaptopOutlined,
    SyncOutlined,
    HomeOutlined,
    SettingFilled,
} from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Title } = Typography;
const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const navStyle = {
            width: 256,
            border: "none",
        }
        return (
            <div className="header-div">

                <div style={{ width: 256 }}>

                    <Menu
                        style={navStyle}
                        onClick={this.handleClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title="Navigation" icon={<SettingFilled />}>
                            <Menu.Item key="1" icon={<LaptopOutlined />}>
                                Home
                    </Menu.Item>
                            <Menu.Item key="2" icon={<SyncOutlined />}>
                                <Link to="/register" />
                                Register
                    </Menu.Item>
                            <Menu.Item key="3" icon={<HomeOutlined />}>
                                <Link to="/signin" />
                                    Sign In
                    </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div >
                <Title>Essentialism</Title>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" icon={<SettingFilled />} style={{ textAlign: "right" }}>
                        <Menu.Item key="1">Light Mode</Menu.Item>
                        <Menu.Item key="2">Dark Mode</Menu.Item>
                    </SubMenu>
                </Menu>
            </div >
        );
    }
}
export default Header;