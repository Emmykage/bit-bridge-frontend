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
  import { Button, ConfigProvider, Divider, Space, Tabs, message, theme } from 'antd';
  import { useEffect, useState } from 'react';
  import "./style.scss"
  import logo from "../../assets/logos/2.png"
  const iconStyles = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };
  import enUS from "antd/es/locale/en_US"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import { SET_LOADING } from '../../redux/app';
import { toast } from 'react-toastify';
  
  const LoginPage = () => {

    const {user, logged, loading} = useSelector(state => state.auth)
    const [loginType, setLoginType] = useState('account');
    const dispatch = useDispatch()
    const { token } = theme.useToken();

    const navigate = useNavigate()
    useEffect(()=> {

    }, [])


    if(!logged){

    
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <LoginFormPage
        loading={loading}
        onFinish={(values) => {
          dispatch(SET_LOADING(true))

          dispatch(userLogin({user: values})).then(result =>
          {
            if(userLogin.fulfilled.match(result)){
              dispatch(SET_LOADING(false))

              navigate("/dashboard/home")
            }
            else  if(userLogin.rejected.match(result)){
              dispatch(SET_LOADING(false) )
              console.log("first", result)
              toast(result.payload.message, {type: "error"})

            }
          }

      
          )

        }}
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          logo={logo}
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="BitBridge Global"
          containerStyle={{
            backgroundColor: 'rgba(0, 0, 0,0.65)',
            backdropFilter: 'blur(4px)',
            // color: "white"
          }}

          className='login-page'
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
                onClick={()=> navigate("/signup")}
              >
                Sign Up
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
            <Tabs.TabPane key={'account'} tab={'Login with account'} />
            <Tabs.TabPane key={'phone'} tab={'Login with phone number'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="email"
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
                placeholder={'username or email'}
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
                placeholder={'Password'}
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
          {/* <Button
          type="primary"
          htmlType="submit"
          block
          loading={true} // Show loading spinner when isLoading is true
          size="large"
        >
          Login
        </Button> */}
        </LoginFormPage>
      </div>
    );
  }
  else{
    navigate("/dashboard/home")
  }
  };
  
  export  const App =  () => {
    return (
      <ConfigProvider locale={enUS}>

      <ProConfigProvider dark>
        <LoginPage />
      </ProConfigProvider>
      </ConfigProvider>

    );
  };


export default App