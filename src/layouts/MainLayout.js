import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

// 1. inline styling 은 지향하는 바가 아니므로 function 밖에 선언하여 렌더링 될때마다 새로 생성되지 않도록 한다.
//const contentStyle = { padding: 45 };
function MainLayout({ selectedKeys, children }) {
  // 2. 혹은 useMemo 훅을 이용하여 메모이제이션 되도록 해둔다
  const contentStyle = useMemo(() => {
    return { padding: 45 };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255,255,255,0.3)',
          }}
        />
        <Menu theme="dark" selectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="list">
            <Link to="/list">설문조사 관리</Link>
          </Menu.Item>
          {/* <Menu.Item key="builder">
            <Link to="/builder">설문조사 빌더</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
