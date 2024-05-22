import { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import {AppHeader} from '../components/navbar/navbar';
import {Sidebar} from '../components/sidebar/sidebar';
import {AppFooter} from '../components/footer/footer';

const { Content } = Layout;
interface PropsLayout {
  children: ReactNode
}
export const MainLayout = ({ children }:PropsLayout) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};