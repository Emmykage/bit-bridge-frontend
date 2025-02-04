import PropTypes from "prop-types"

const HeroBanner = ({text, link, extra}) => {
  return (
    <div className='h-72 bg-gray-900 flex justify-center items-center'>
      <div className="bg-red- w-full max-w-app-layout px-4 m-auto">
    <div className="flex gap-5 text-gray-200 ">
      <p>/ {link}
        </p>

        <span>/{extra}
        </span>

    </div>


        <h2 className="text-4xl font-semibold text-left mt-4 text-white">
          
          {text}
          </h2>
      </div>
      </div>



  )


}
HeroBanner.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  extra: PropTypes.string
}

export default HeroBanner