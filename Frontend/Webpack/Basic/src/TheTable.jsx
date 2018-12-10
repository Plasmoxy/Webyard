import React from 'react'
import ReactTable from 'react-table'

export default class TheTable extends React.Component {

    render() {
        const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }]
      
        const columns = [{
          Header: 'Name',
          accessor: 'name'
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <input type="text"></input> // Custom cell components!
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }]
      
        return <ReactTable
        className="bg-danger m-2"
          data={data}
          columns={columns} />
      }
      

}