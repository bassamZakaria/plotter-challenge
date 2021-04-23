import React from 'react';
import { Layout } from 'antd';
import Columns from '../../components/Columns/Columns';
import Plotter from '../Plotter/Plotter';

export const AppLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Layout.Sider theme="light" width={241}>
      <Columns />
    </Layout.Sider>
    <Layout>
      <Plotter />
    </Layout>
  </Layout>
);
