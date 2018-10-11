import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Row from './Row'

class Table extends Component {

  render() {
    const { store } = this.props
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Salary:</td>
            </tr>
          </thead>
          <tbody>
            {
              store.employeeList.map((employee, index) =>
                <Row
                  key={index}
                  data={employee}
                />

              )}
          </tbody>
          <tfoot>
            <tr>
              <td>Media:</td>
              <td>{store.averageSalary}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

Table = observer(Table)

export default Table