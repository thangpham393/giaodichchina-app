import React from "react"
import styles from "./LayoutHeader.module.css"
import { Avatar, Badge, Divider, Layout, Popover, Tooltip } from "antd"
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons"

const { Header } = Layout
export default function LayoutHeader() {
  const text = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
        padding: "5px",
      }}
    >
      <span style={{ textTransform: "uppercase" }}>Thông báo</span>
      <span style={{ color: "#1890ff", fontSize: "12px" }}>
        Đánh dấu tất cả đã đọc
      </span>
    </div>
  )

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return (
    <Header
      style={{
        margin: 0,
        padding: "0 20px",
        backgroundColor: "#F0F2F5",
      }}
    >
      <div className={styles.headerTop}>
        <span style={{ fontSize: "22px", fontWeight: "500" }}>Dashboard</span>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <a>Trang chủ</a>
          </div>
          <div className={styles.headerItem}>
            <span>Tỷ giá:3690 </span>
          </div>

          <div className={styles.headerItem}>
            <Popover
              arrowPointAtCenter={false}
              placement="bottomRight"
              title={text}
              content={content}
              trigger="click"
            >
              <Badge count={5}>
                <BellOutlined style={{ fontSize: "18px" }} />
              </Badge>
            </Popover>
          </div>
          <div>
            <Tooltip
              title={
                <div>
                  <a href="#">
                    <UserOutlined style={{ marginRight: 10 }} /> Thông tin tài
                    khoản
                  </a>
                  <Divider style={{ margin: 10 }} />
                  <a type="link" href="#">
                    <LogoutOutlined style={{ marginRight: 10 }} /> Đăng xuất
                  </a>
                </div>
              }
              trigger="click"
              placement="bottom"
              color="#fff"
            >
              <div className={styles.auth}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
                <span>Username</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </Header>
  )
}
