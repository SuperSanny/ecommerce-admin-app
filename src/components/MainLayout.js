import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillSetting,
  AiTwotoneMail,
  AiOutlinePicLeft,
  AiOutlinePicRight,
} from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { FaDatabase } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="logo">
          <h2 className="text-white fs-5 py-3 mb-0 text-center">
            <span className="sm-logo">A2Z</span>
            <span className="lg-logo">A2Z Bazzar</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <FaDatabase />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  label: "Products List",
                },
                {
                  key: "brand",
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  label: "Brand List",
                },
                {
                  key: "category",
                  label: "Category",
                },
                {
                  key: "list-category",
                  label: "Categories List",
                },
                {
                  key: "color",
                  label: "Color",
                },
                {
                  key: "list-color",
                  label: "Colors List",
                },
              ],
            },
            {
              key: "orders",
              icon: <AiOutlineShoppingCart />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <AiFillSetting />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <AiFillSetting />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <AiFillSetting />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <AiOutlineHeart />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <AiTwotoneMail />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between px-3 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicLeft /> : <AiOutlinePicRight />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <IoMdNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="/images/user-logo.jpg"
                  className="img-fluid"
                  alt="user"
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Sanny Kumar</h5>
                <p className="mb-0">sannycucek@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
