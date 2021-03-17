import PropTypes from 'prop-types'
import { AddItemInput, Textarea } from './InputStyled'

const Input = ({
  tag,
  type,
  placeholder,
  value,
  handleItemChange,
  smallWidth,
}) => {
  return (
    <>
      {tag !== 'textarea' ? (
        <AddItemInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleItemChange}
          required={true}
          minLength={1}
          maxLength={150}
          smallWidth={smallWidth}
        />
      ) : (
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={handleItemChange}
          required={true}
          rows='4'
          cols='33'></Textarea>
      )}
    </>
  )
}

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  handleItemChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  tag: 'input',
}

export default Input
