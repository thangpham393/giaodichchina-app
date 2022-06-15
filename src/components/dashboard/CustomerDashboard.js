import React, { useState } from "react"
import { Alert, Card, Col, Row, Button, Modal, Statistic } from "antd"
import { TransactionOutlined } from "@ant-design/icons"

export default function CustomerDashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <div className="alert">
        <Alert
          message="Thông báo"
          description="Hôm nay 15/06/2022, Quý khách đã gửi 5 YCTT với giá trị 3000¥ cho Giaodichchina.vn, cảm ơn quý khách đã tin tưởng sử dụng dịch vụ"
          type="success"
          showIcon
          closable
        />
      </div>
      <div>
        <Row style={{ marginTop: "20px" }} gutter={[16, 24]}>
          <Col md={24} lg={10}>
            <h1 className="layoutTitle">Số dư tài khoản</h1>
            <Card className="cardLayout">
              <Row>
                <Col span={8}>
                  <div>
                    <Statistic
                      title="Số dư khả dụng(VNĐ)"
                      value={112893000}
                      precision={0}
                    />
                  </div>
                </Col>
                <Col span={8} offset={8} style={{ textAlign: "right" }}>
                  <Button type="primary">
                    <TransactionOutlined />
                    Nạp tiền
                  </Button>
                </Col>
              </Row>
              <Row>
                <p style={{ marginTop: "36px" }}>QUÝ KHÁCH ĐÃ GIAO DỊCH</p>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <Statistic title="Taobao (Đơn)" value={112893} />
                </Col>
                <Col span={6}>
                  <Statistic title="1688 (Đơn)" value={112893} />
                </Col>
                <Col span={6}>
                  <Statistic title="Alipay (Đơn)" value={112893} />
                </Col>
                <Col span={6}>
                  <Statistic title="Thẻ TQ (Đơn)" value={112893} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={14}>
            <h1 className="layoutTitle">Giao dịch hôm nay</h1>
            <Row gutter={[16, 24]}>
              <Col md={24} lg={12}>
                <Card>
                  <Statistic
                    title="TỔNG RMB HÔM NAY"
                    value={112893}
                    precision={0}
                  />
                </Card>
              </Col>
              <Col md={24} lg={12}>
                <Card className="cardLayout card-hover">
                  <Statistic
                    title="TỔNG VNĐ HÔM NAY"
                    value={112893}
                    precision={0}
                  />
                </Card>
              </Col>
              <Col md={24} lg={12}>
                <Card className="cardLayout card-hover">
                  <Statistic
                    title="ĐÃ NẠP TIỀN HÔM NAY (VNĐ)"
                    value={112893}
                    precision={0}
                  />
                </Card>
              </Col>
              <Col md={24} lg={12}>
                <Card className="cardLayout card-hover">
                  <Statistic
                    title="HOÀN TIỀN HÔM NAY (VNĐ)"
                    value={112893}
                    precision={0}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Card className="cardLayout" style={{ marginTop: "20px" }}>
          <div>
            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button type="primary" ghost htmlType="submit">
                  <TransactionOutlined /> Tạo yêu cầu thanh toán
                </Button>
                <Button
                  style={{ margin: "0 8px", color: "green" }}
                  onClick={showModal}
                >
                  Xem tỉ giá
                </Button>
                <Modal
                  title="Tỷ giá hôm nay"
                  visible={isModalVisible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <div style={{ textAlign: "right" }}>
                    <Button type="primary" onClick={handleOk}>
                      Xác nhận
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
          </div>
          <div
            style={{ margin: "20px 0", textAlign: "center", fontSize: "24px" }}
          >
            <h1>Danh sách Yêu cầu thanh toán</h1>
          </div>
        </Card>
      </div>
    </div>
  )
}
