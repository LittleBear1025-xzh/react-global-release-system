import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu, theme, Layout, MenuProps, Divider } from 'antd';
import Sider from 'antd/es/layout/Sider';
import axios, { AxiosResponse } from 'axios';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from 'antd/es/typography/Title';

interface Props {
    collapsed: boolean;
    handleSiderClick: (name: string) => void;
}

interface MenuInfo {
    id: number;
    title: string;
    key: string;
    grade: number;
    pagepermisson: number;
    children: [];
}

const iconList: { [key: string]: ReactNode } = {
    '/home': <UserOutlined />,
    '/user-manage': <UserOutlined />,
    '/user-manage/list': <MenuFoldOutlined />,
    '/right-manage': <VideoCameraOutlined />,
    '/right-manage/role/list': <UserOutlined />
}

const rootUrl = 'http://localhost:3000/#'

export default function SideMenu(props: Props) {
    const [items, setItems] = useState<MenuProps['items']>()
    const navigate = useNavigate();
    const location = useLocation()

    const path = location.pathname

    // useEffect(() => {
    //     console.log(path)
    // }, [location])

    const getMenuItems = useCallback(
        (menuInfoList: MenuInfo[]): MenuProps['items'] => {
            return menuInfoList.map((_: MenuInfo) => {
                if (_.pagepermisson === 1) {
                    return {
                        key: _.key,
                        label: _.title,
                        icon: iconList[_.key],
                        children: _.children?.length > 0 ? getMenuItems(_.children) : undefined,
                        onClick: (e) => navigate(e.key)
                    } as ItemType
                }
                return null
            })
        }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/rights?_embed=children').then((res: AxiosResponse<MenuInfo[]>) => {
            console.log(res.data)
            const menuItems = getMenuItems(res.data)
            setItems(menuItems)
        })
    }, [])

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>

                <Title level={4} style={{
                    color: 'white',
                    textAlign: 'center',
                    display: `${props.collapsed ? 'none': ''}`
                }}>全球新闻发布系统</Title>
                {/* <Divider style={{borderColor: 'white'}}/> */}
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[path]}
                    defaultOpenKeys={['/' + path.split('/')[1]]}
                    items={items}
                    style={{
                        flex: '1',
                        overflow: 'auto',
                    }}
                />
            </div>
        </Sider>
    )
}