import { Drawer } from 'antd';
import PropTypes from 'prop-types';
const DrawerModal = ({
    children,
    open, 
    onClose}) => {
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
  return (
    <>

      <Drawer title="Cart" onClose={onClose} open={open}>

        {children}
      </Drawer>
    </>
  );
};

DrawerModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func  ,
  children: PropTypes.children
}

export default DrawerModal;