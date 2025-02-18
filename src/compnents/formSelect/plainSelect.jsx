import { Select } from 'antd';
import PropTypes from 'prop-types';
import './style.scss'
const PlainSelect = ({options,

    onChange
}) => (
  <Select
    showSearch
    onChange={onChange}
    style={{
      height: 40,
    }}
    placeholder="Search to Select"
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={options}
    className='whiteBg'
  />
);

PlainSelect.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func
}
export default PlainSelect;