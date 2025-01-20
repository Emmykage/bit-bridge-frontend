import {  LogoutOutlined, UserOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';

const DropDown = () => {
  const dispatch = useDispatch()

    // const handleButtonClick = (e) => {
    //     message.info('Click on left button.');
    //   };
      const handleMenuClick = (e) => {
        switch (e.key) {
            case '1':
              // Navigate to My Account
              message.info('Navigating to My Account...');
              console.log('Navigating to My Account');
              // Example: navigate('/my-account'); // Use a routing library like react-router-dom
              break;
      
            case '2':
              // Navigate to Profile
              message.info('Navigating to Profile...');
              console.log('Navigating to Profile');
              // Example: navigate('/profile');
              break;
      
            case '3':
              // Log out
              message.info('Logging out...');
              dispatch(userLogout());
              
              // Example: Perform logout action here
              break;
      
            default:
              message.info('Unknown action');
              console.log('Unknown action');
          }
      };
      
    
const items = [
    {
      label: 'My Account',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Profile',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'Log out',
      key: '3',
      icon: <LogoutOutlined />,
      danger: true,
    },
    // {
    //   label: 'Settings',
    //   key: '4',
    //   icon: <SettingOutlined />,
    //   danger: true,
    //   disabled: true,
    // },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
    return  (
  <Space wrap>
    <Dropdown.Button menu={menuProps} icon={<UserOutlined />}>
      Account
    </Dropdown.Button>
</Space>
);
}
export default DropDown;