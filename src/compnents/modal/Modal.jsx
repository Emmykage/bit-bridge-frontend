// import React, { useState } from 'react';
import { Modal } from 'antd';
import "./style.scss"
import { CloseCircleFilled } from '@ant-design/icons';
const AppModal = ({
    children, 
    isModalOpen,
    setIsModalOpen,
    handleCancel,
    title,
    footer,
    handleOk}) => {

  return (
    <>

      <Modal open={isModalOpen} 
      title={title}
      onOk={handleOk} 
      onCancel={handleCancel}
      closeIcon={<CloseCircleFilled className='text-white'/>}
      closable={true}
      centered={true}
      maskClosable={true}
      footer={null}
      >
       
       
       <div className=''>
        {children}

       </div>
      </Modal>
    </>
  );
};
export default AppModal;