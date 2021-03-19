import React from "react";
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LaptopOutlined,
    SyncOutlined,
    HomeOutlined,
    SettingFilled,
} from '@ant-design/icons';

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
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['5']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<LaptopOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SyncOutlined />}>
                        Register
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HomeOutlined />}>
                        Sign In
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<SettingFilled />} title="Settings">
                        <Menu.Item key="5">Dark Mode</Menu.Item>
                        <Menu.Item key="6">Light Mode</Menu.Item>
                        <Menu.Item key="7">Original</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Header;