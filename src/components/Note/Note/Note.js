import { IoClose } from 'react-icons/io5'
import {
  NoteContainer,
  NoteInfo,
  NoteLink,
  NoteDesc,
  DeleteNotekBtn,
} from './NoteStyled'

const Note = ({ note, handleDeleteNote }) => {
  return (
    <NoteContainer>
      <DeleteNotekBtn onClick={() => handleDeleteNote(note.id)}>
        <IoClose size='2.5rem' color='#fff' />
      </DeleteNotekBtn>
      <NoteInfo>
        <NoteLink href={note.link} target='_blank' rel='noopener noreferrer'>
          {note.link}
        </NoteLink>
        <NoteDesc>{note.desc}</NoteDesc>
      </NoteInfo>
    </NoteContainer>
  )
}

export default Note
