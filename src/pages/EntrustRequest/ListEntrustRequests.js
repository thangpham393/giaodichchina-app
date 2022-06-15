import React, { useState } from "react"
import {
  Alert,
  Card,
  Col,
  Row,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Modal,
} from "antd"
import { SyncOutlined, TransactionOutlined } from "@ant-design/icons"
import { Tag } from "antd"

const { CheckableTag } = Tag
const { Option } = Select

const tagsData = [
  "Hủy bỏ",
  "Xác Nhận",
  "Chờ xử lý",
  "Đang xử lý",
  "Thành công",
  "Từ chối",
  "Hoàn tiền",
]
const ePlatform = ["Taobao", "1688"]
export default function CustomerDashboard() {
  const [form] = Form.useForm()
  const [selectedTags, setSelectTags] = useState(["Xác Nhận"])

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log("You are interested in: ", nextSelectedTags)
    setSelectTags(nextSelectedTags)
  }

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
          description="Hôm nay 12/03/2022, Quý khách đã gửi 5 YCTT với giá trị 3000¥ cho ThanhToanAlipay.com, cảm ơn quý khách đã tin tưởng sử dụng dịch vụ"
          type="success"
          showIcon
          closable
        />
      </div>
      <div>
        <Card style={{ marginTop: "20px" }}>
          <div className="status">
            <div style={{ marginBottom: "20px" }}>
              <span style={{ color: "#1890ff" }}>Trạng thái:</span>
              {tagsData.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                  style={{ fontSize: "14px", marginLeft: "30px" }}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ color: "#1890ff" }}>Trang TMĐT:</span>
              {ePlatform.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                  style={{ fontSize: "14px", marginLeft: "30px" }}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <div
              style={{
                borderBottom: "2px dotted #f0f0f0",
                marginBottom: "20px",
              }}
            >
              <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
              >
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item label="Mã yêu cầu">
                      <Input placeholder="Nhập số RMB đã yêu cầu" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Tài khoản thanh toán">
                      <Select>
                        <Option value="1">Đơn Taobao: 84-976786446</Option>
                        <Option value="2">Đơn 1688: 84-352508137</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Thời gian yêu cầu">
                      <DatePicker style={{ width: "45%" }} />
                      <span
                        style={{
                          display: "inline-block",
                          width: "24px",
                          lineHeight: "32px",
                          textAlign: "center",
                        }}
                      >
                        -
                      </span>
                      <DatePicker style={{ width: "45%" }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div>
              <Row>
                <Col span={24} style={{ textAlign: "right" }}>
                  <Button type="primary" htmlType="submit">
                    Tìm kiếm
                  </Button>
                  <Button
                    style={{ margin: "0 8px" }}
                    onClick={() => {
                      form.resetFields()
                    }}
                  >
                    <SyncOutlined />
                    Làm mới bộ lọc
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card style={{ marginTop: "20px" }}>
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
