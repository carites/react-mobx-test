import React, { Component } from 'react'
import { observer } from 'mobx-react'


class Controls extends Component {

  addEmployee = () => {
    const name = prompt("Insert employee name","Name")
    const salary = parseInt(prompt("Insert employee salary","0"),10)
    const employee = {name,salary}
    console.log(employee)
    this.props.store.addEmployee(employee)
  }

  clearTable = () => {
    this.props.store.clearEmployeeList()
  }

  render() {
    return (
      <div className="controls">
        <button onClick={this.addEmployee} >Add Employee</button>
        <button onClick={this.clearTable} >Clear Table</button>
      </div>
    )
  }
}

Controls = observer(Controls)

export default Controls