import React from 'react';
import { Select } from 'antd';
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
  />
);
export default PlainSelect;