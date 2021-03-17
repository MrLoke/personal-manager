import PropTypes from 'prop-types'
import { FormContainer, AddItemForm, FormTitle } from './FormStyled'

const Form = ({ formTitle, handleAddItem, children }) => {
  return (
    <FormContainer>
      <AddItemForm autoComplete='off' onSubmit={handleAddItem}>
        <FormTitle>{formTitle}</FormTitle>
        {children}
      </AddItemForm>
    </FormContainer>
  )
}

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
}

export default Form
