import PropTypes from "prop-types"

const HeroBanner = ({text}) => {
  return (
    <div className='h-72 bg-gray-700 flex justify-center items-center'>
        <h2 className="text-4xl max-w-5xl font-semibold text-center text-white">
          
          {text}
          </h2>
      </div>


  )


}
HeroBanner.propTypes = {
    text: PropTypes.string
  }

export default HeroBanner