import { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Profile</Menu.Item>
        <Menu.Item key="3">Settings</Menu.Item>
      </Menu>
    </Header>
  );
};
