import React from "react"
import CustomerDashboard from "../../components/dashboard/CustomerDashboard"
import MainLayout from "../../layouts/MainLayout"

export default function CustomerHome() {
  return (
    <MainLayout>
      <CustomerDashboard />
    </MainLayout>
  )
}
