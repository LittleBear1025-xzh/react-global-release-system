import { theme } from 'antd'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'


const sdf = styled.div`
    min-height: 100vh;
`

export default function NewsSandBox() {

    const [collapsed, setCollapsed] = useState(false)
    const [topHeaderName, setTopHeaderName] = useState('home')

    const {
        token: { colorBgContainer }
    } = theme.useToken()


    const handleSiderToggle = () => {
        setCollapsed(!collapsed)
    }
    const handleSiderClick = (name: string) => {
        setTopHeaderName(name)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideMenu collapsed={collapsed} handleSiderClick={handleSiderClick} />
            <Layout>
                <TopHeader collapsed={collapsed} handleSiderToggle={handleSiderToggle} />
                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}