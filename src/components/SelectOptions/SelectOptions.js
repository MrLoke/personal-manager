import PropTypes from 'prop-types'
import {
  SelectWrapper,
  SelectContainer,
  SelectList,
  SelectItem,
  SelectBtn,
} from './SelectOptionsStyled'

const SelectOptions = ({
  items,
  btnText,
  isOpen,
  selectedItem,
  getToggleButtonProps,
  getMenuProps,
  highlightedIndex,
  getItemProps,
}) => {
  // rest props is from downshift
  return (
    <SelectWrapper>
      <SelectContainer>
        <SelectBtn type='button' {...getToggleButtonProps()}>
          {selectedItem || btnText}
        </SelectBtn>
        <SelectList {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <SelectItem
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#bde4ff' }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}>
                {item}
              </SelectItem>
            ))}
        </SelectList>
      </SelectContainer>
    </SelectWrapper>
  )
}

SelectOptions.propTypes = {
  items: PropTypes.array.isRequired,
  btnText: PropTypes.string.isRequired,
  // rest props is from downshift
}

export default SelectOptions
