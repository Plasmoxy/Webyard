import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Note {
    static lastId = 0

    constructor(public text: string = "") {
        Note.lastId += 1
    }

    date: string = Date()
    id = Note.lastId
}


interface NotesComponentProps {

}

interface NotesComponentState {
    notes: Note[],
    newNoteInput: string
}

export default class extends React.Component<NotesComponentProps, NotesComponentState> {

    constructor(props: NotesComponentProps) {
        super(props)
        this.state = {
            notes: [],
            newNoteInput: ""
        }
    }

    render() {
        const { notes, newNoteInput } = this.state

        return <div className="card bg-dark text-light m-3 p-2 text-center spacing-3">
            
            {notes.map(p => <div className="my-2" key={p.id}>
                <span className="my-auto">{p.text}</span>
                <span className="mx-2" onClick={() => this.onDismiss(p.id)}>
                    <FontAwesomeIcon color="yellow" size="2x" icon={faTimesCircle}  />
                </span>
            </div>)}

            <div>
                <input
                    type="text"
                    className="form-control mx-2"
                    value={newNoteInput}
                    onChange={(e) =>
                        this.setState({newNoteInput: e.target.value})
                    } />
                        
                <button
                    className="btn btn-primary m-2"
                    onClick={() =>this.newNote()} >Add</button>
            </div>

        </div>
    }

    onDismiss(id: number) {
        console.log(id)
        this.setState({
            notes: this.state.notes.filter(x => x.id != id)
        })
    }


    newNote() {
        this.setState((state) => ({
            notes: [...state.notes, new Note(state.newNoteInput)],
            newNoteInput: ""
        }))
    }

}