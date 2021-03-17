import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from 'features/notesSlice'
import Form from 'components/Form/Form'
import Input from 'components/Input/Input'
import AddButton from 'components/AddButton/AddButton'
import NotesList from 'components/Note/NotesList/NotesList'
import Sidebar from 'components/Sidebar/Sidebar'
import styled from 'styled-components/macro'

const NotesWrapper = styled.div`
  display: flex;
`

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 90%;
  }
`

const AddItemContainer = styled.div`
  display: flex;
`

const Notes = () => {
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleLinkChange = (e) => setLink(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  const handleAddNewNote = (e) => {
    e.preventDefault()
    if (description.length === 0 && link.length === 0) return

    dispatch(
      addNote({
        link: link,
        desc: description,
      })
    )

    setDescription('')
    setLink('')
  }

  return (
    <NotesWrapper>
      <Sidebar />
      <NotesContainer>
        <Form formTitle='Add new note' handleAddItem={handleAddNewNote}>
          <AddItemContainer>
            <Input
              type='text'
              placeholder='Enter article link'
              value={link}
              handleItemChange={handleLinkChange}
            />
            <AddButton>Add</AddButton>
          </AddItemContainer>
          <Input
            tag='textarea'
            placeholder='Enter description'
            value={description}
            handleItemChange={handleDescriptionChange}
          />
        </Form>
        <NotesList />
      </NotesContainer>
    </NotesWrapper>
  )
}

export default Notes
