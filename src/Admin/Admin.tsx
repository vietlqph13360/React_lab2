import { AppstoreOutlined, LaptopOutlined, NotificationOutlined, PhoneFilled, PlusOutlined, SoundOutlined, TabletOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Image, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { Children } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
<link rel="stylesheet" href="Admin.css" />
const { Header, Content, Sider } = Layout;

// menu
const items = [
  {
    label: (<Link to="/admin">Điện thoại </Link>),
    key: 'phone',
    icon: <PhoneFilled />,
  },
  {
    label: (<Link to='/admin'>Laptop</Link>),
    key: 'laptop',
    icon: <LaptopOutlined />,
  },
  {
    label: (<Link to='/admin'>Máy tính bảng</Link>),
    key: 'maytinh',
    icon: <TabletOutlined />,
  },
  {
    label: (<Link to='/admin'>Âm thanh</Link>),
    key: 'amthanh',
    icon: <SoundOutlined />,
  },

];
// option search
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Dashboard = () => (
  <Layout>

    <Header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start Headers" style={{ backgroundColor: "#00B0D7" }}>
      <img src='https://res.cloudinary.com/vulong/image/upload/v1657504890/uploadimg/kf2zfzrmg8uijd2dmzci.png' width={70} height={70} />
      <form className="col-12 col-lg-6 mb-3 mb-lg-0 me-lg-3 mx-5">
        <Select className='text-start '
          mode="tags"
          style={{
            width: '100%',
          }}
          placeholder="Search..."
        >
       

        </Select>
      </form>
      <h5 className='col-4 text-end text-light'>Xin Chào Admin</h5>
    </Header>
    <Layout >
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);


export default Dashboard;