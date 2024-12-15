import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
  setAlpha,
} from '@ant-design/pro-components';
import enUS from "antd/es/locale/en_US"

import { ConfigProvider, Space, Tabs, theme } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Signup = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState('phone');

  const iconStyles = {
    marginInlineStart: '16px',
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm
        onFinish={(values) => {
          console.log(values)
        }}
          logo="https://github.githubassets.com/favicons/favicon.png"
          title="BitBridge Global"
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          containerStyle={{
            backdropFilter: 'blur(4px)',
            height: "100vh",
            display: "flex",
            // width: "500px",
            justifyContent: "center"
          }}
          subTitle="Nigerians Largest trading and exchange platform"
          actions={
            <Space>
              Already have an account? <NavLink to={"/login"}>Login</NavLink> 
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
          submitter={{
            searchConfig: {
              submitText: 'Sign Up', // Change button text to Sign Up
            },
          }}

        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey)}
          >
            <Tabs.TabPane key={'account'} tab={'Signup with email and password'} />
          </Tabs>
          <>
            <ProFormText
              name="firstName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'John'}
              rules={[
                {
                  required: true,
                  message: 'Please enter your first name!',
                },
              ]}
            />
            <ProFormText
              name="lastName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'Doe'}
              rules={[
                {
                  required: true,
                  message: 'Please enter your last name!',
                },
              ]}
            />
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'email@example.com'}
              rules={[
                {
                  required: true,
                  message: 'Please enter your email!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
                strengthText:
                  'Password should contain numbers, letters, and special characters, at least 8 characters long.',
                statusRender: (value) => {
                  const getStatus = () => {
                    if (value && value.length > 12) {
                      return 'ok';
                    }
                    if (value && value.length > 6) {
                      return 'pass';
                    }
                    return 'poor';
                  };
                  const status = getStatus();
                  if (status === 'pass') {
                    return (
                      <div style={{ color: token.colorWarning }}>
                        Strength: Medium
                      </div>
                    );
                  }
                  if (status === 'ok') {
                    return (
                      <div style={{ color: token.colorSuccess }}>
                        Strength: Strong
                      </div>
                    );
                  }
                  return (
                    <div style={{ color: token.colorError }}>Strength: Weak.</div>
                  );
                },
              }}
              placeholder={'Password'}
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                },
              ]}
            />
          </>

          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            {/* <ProFormCheckbox noStyle name="autoLogin">
            Auto-login
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Forgot password
            </a> */}
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

const App = () => (
  <ConfigProvider locale={enUS}>
    <Signup />
  </ConfigProvider>
);

export default App;
