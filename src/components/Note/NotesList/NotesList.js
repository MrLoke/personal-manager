import { useDispatch, useSelector } from 'react-redux'
import { selectNotes, deleteNote } from 'features/notesSlice'
import Note from 'components/Note/Note/Note'
import { ListNotes } from './NotesListStyled'

const NotesList = () => {
  const notes = useSelector(selectNotes)
  const dispatch = useDispatch()

  const handleDeleteNote = (selectedNoteId) => {
    if (!selectedNoteId) return
    dispatch(deleteNote({ id: selectedNoteId }))
  }

  return (
    <ListNotes>
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
    </ListNotes>
  )
}

export default NotesList
