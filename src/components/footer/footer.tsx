import { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Dashboard ©2024 Created by Your Team
    </Footer>
  );
};

export default AppFooter;
