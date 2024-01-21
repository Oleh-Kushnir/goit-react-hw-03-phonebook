import PropTypes from 'prop-types';

import { Label, Input } from '../ContactForm/ContactForm.style';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>
        Filter contacts by name
        <Input value={value} onChange={onChange} />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
