import React from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter type="text" value={value} onChange={onChange}></InputFilter>
    </LabelFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
