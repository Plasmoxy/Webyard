import React from 'react'
import ReactTable from 'react-table'

export default class TheTable extends React.Component {

    render() {
        const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurner',
            age: 23,
          }
        }]
      
        const columns = [{
          Header: 'Name',
          accessor: 'name',
          Cell: props => <input type="text" className="form-control" defaultValue={props.value} />
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <input type="text" className="form-control" defaultValue={props.value} />
        }, {
          Header: 'Friend Name',
          accessor: 'friend.name',
          Cell: props => <input type="text" className="form-control" defaultValue={props.value} />
        },{
          Header: 'Friend age',
          accessor: 'friend.age',
          Cell: props => <input type="text" className="form-control" defaultValue={props.value} /> 
        }]
      
        return <ReactTable
          className="bg-danger m-2"
          data={data}
          columns={columns} />
      }
      

}