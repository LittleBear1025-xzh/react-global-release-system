import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, message, Space, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

interface Props {
    collapsed: boolean
    handleSiderToggle?: () => void
}

export default function TopHeader(props: Props) {
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const printMenuInfo: MenuProps['onClick'] = (item) => {
        // message.info(`Click on item ${item.}`)
        console.log('Click on item', item.key)
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: props.handleSiderToggle,
            })}
            <div style={{ float: 'right' }}>
                <Dropdown menu={{ items, onClick: printMenuInfo}}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </Header>
    )
}
