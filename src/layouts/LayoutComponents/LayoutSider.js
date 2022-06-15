import React from "react"
import { useState } from "react"
import { Layout, Menu } from "antd"
import {
  AlipayCircleOutlined,
  PieChartOutlined,
  FileOutlined,
  TransactionOutlined,
  UserOutlined,
} from "@ant-design/icons"

const { Sider } = Layout
const { SubMenu } = Menu
export default function LayoutSider() {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    console.log(collapsed)
    setCollapsed(!collapsed)
  }
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div
        className="logo"
        style={{
          height: "32px",
          margin: "16px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Giaodichchina.vn
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<AlipayCircleOutlined />}
          title="Thanh toán hộ"
        >
          <Menu.Item key="3">Tạo yêu cầu TTH</Menu.Item>
          <Menu.Item key="4">Danh sách yêu cầu</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<TransactionOutlined />}
          title="Xử lý hoàn tiền"
        >
          <Menu.Item key="6">Tạo lệnh hoàn tiền</Menu.Item>
          <Menu.Item key="8">Danh sách lệnh hoàn</Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Thông tin tài khoản
        </Menu.Item>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Hướng dẫn
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
