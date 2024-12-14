import { Select } from 'antd';
import PropTypes from 'prop-types';

const SelectInput = ({options, className, onChange, defaultValue}) => {
  return (
    <div>
         <Select
        placeholder="Enter amount"
        defaultValue={defaultValue}
        // variant="borderless"
        style={{ flex: 1 }}
        onChange={onChange}
        options={options}
        className={`${className} h-12 order-gray-600 rounded brder w-full`}
      />
    </div>
  )
}

SelectInput.propTypes= {
    options: PropTypes.array,
    onChange: PropTypes.func ,
    className: PropTypes.func ,
    defaultValue: PropTypes.string
}
export default SelectInput