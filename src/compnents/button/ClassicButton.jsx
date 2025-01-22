import { SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const ClassicBtn = ({
  htmlType,
  children,
  onclick,
  type,
  className,
  disabled,
  isLoading
}) => (
  <Button
  htmlType={htmlType}
  loading={isLoading && { icon: <SyncOutlined spin /> }}
    onClick={onclick}
    className={`${disabled && 'cursor-not-allowed'} ${type == 'cancel' ? 'text-red-500' : ''} ${className} font-semibold border-4 items-center block my-5 py-0 h-10 px-5 border-theme bg-light hover:bg-theme-dark hover:text-light`}
  >
    {children}
  </Button>
);

export default ClassicBtn;