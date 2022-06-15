import { Layout } from "antd"
import React from "react"
import LayoutHeader from "./LayoutComponents/LayoutHeader"
import LayoutSider from "./LayoutComponents/LayoutSider"

const { Footer, Content } = Layout
export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          App created by Giaodichchina
        </Footer>
      </Layout>
    </Layout>
  )
}
