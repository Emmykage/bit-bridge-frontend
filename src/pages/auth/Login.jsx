import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
  } from '@ant-design/icons';
  import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
  } from '@ant-design/pro-components';
  import { Button, Divider, Space, Tabs, message, theme } from 'antd';
  import { useState } from 'react';
  import "./style.scss"
  import logo from "../../assets/logos/2.png"
  const iconStyles = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };
  
  const LoginPage = () => {
    const [loginType, setLoginType] = useState('phone');
    const { token } = theme.useToken();
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          logo={logo}
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="BitBridge Global"
          containerStyle={{
            backgroundColor: 'rgba(0, 0, 0,0.65)',
            backdropFilter: 'blur(4px)',
            // color: "white"
          }}

          className='login-page yankee'
          subTitle="Login "
          style={{
            color: 'white'
          }}
          activityConfig={{
            style: {
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
              color: 'white',
              borderRadius: 8,
              backgroundColor: 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(4px)',
            },
            title: 'Event Title, with Configurable Image',
            subTitle: 'Event Introduction Description Text',
            action: (
              <Button
                size="large"
                style={{
                  borderRadius: 20,
                  background: token.colorBgElevated,
                  color: token.colorPrimary,
                  width: 120,
                }}
              >
                Login
              </Button>
            ),
          }}
          actions={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Divider plain>
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: 'normal',
                    fontSize: 14,
                  }}
                >
                  Other login methods
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <AlipayOutlined style={{ ...iconStyles, color: 'white' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <WeiboOutlined style={{ ...iconStyles, color: '#1890ff' }} />
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey)}
          >
            <Tabs.TabPane key={'account'} tab={'Login with account and password"'} />
            <Tabs.TabPane key={'phone'} tab={'Login with phone number'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <UserOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your username!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Password: ant.design'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <MobileOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                name="mobile"
                placeholder={'Mobile Number'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your mobile number!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: 'Invalid mobile number format!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'Please enter the verification code.'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'Get verification code'}`;
                  }
                  return 'Get verification code';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the verification code',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('Verification code successfully obtained! The code is: 1234');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
            Auto-login
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Forgot Password
            </a>
          </div>
        </LoginFormPage>
      </div>
    );
  };
  
  export  const App =  () => {
    return (
      <ProConfigProvider dark>
        <LoginPage />
      </ProConfigProvider>
    );
  };


export default App