import PropTypes from 'prop-types'
import Footer from '../compnents/footer/Footer'

const MainLayout = ({children}) => {
  return (
    <div className='mt-40'>

        {children}
        <Footer/>

    </div>
  )
}
MainLayout.propTypes = {
    children: PropTypes.node
}

export default MainLayout