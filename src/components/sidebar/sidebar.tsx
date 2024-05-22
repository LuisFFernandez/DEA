import { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: FC = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>Users</Menu.Item>
        <Menu.Item key="2" icon={<LaptopOutlined />}>Devices</Menu.Item>
        <Menu.Item key="3" icon={<NotificationOutlined />}>Alerts</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
