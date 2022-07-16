import PropTypes from 'prop-types';
import { Input } from '../ui/Input.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
