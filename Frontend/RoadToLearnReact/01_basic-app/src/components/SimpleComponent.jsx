import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Note {
    constructor(text) {
        this.text = text
        this.date = Date()

        Note.lastId += 1
        this.id = Note.lastId
    }
}
Note.lastId = 0

export default class SimpleComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [new Note("XD")],
            newNoteInput: ""
        }
    }
    
    render() {
        const { notes, newNoteInput } = this.state

        return (<div className="card bg-dark text-light m-3 p-2 text-center spacing-3">
            
            {notes.map(p => <div className="my-2" key={p.id}>
                <span className="my-auto">{p.text}</span>
                <FontAwesomeIcon className="mx-2" color="yellow" size="2x" icon={faTimesCircle} onClick={() => this.onDismiss(p.id)} />
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

        </div>)
    }

    onDismiss(id) {
        console.log(id)
        this.setState({
            notes: this.state.notes.filter(x => x.id != id)
        })
    }


    newNote(text) {
        this.setState((state) => ({
            notes: [...state.notes, new Note(state.newNoteInput)],
            newNoteInput: ""
        }))
    }
}