import {decorate, observable, computed, action} from 'mobx'

class Store {
    employeeList = [
        {name:"Genny", salary:15}
    ]

    addEmployee (employee) {
        this.employeeList.push(employee)
    }

    clearEmployeeList() {
        this.employeeList = []
    }

    get averageSalary(){
        let sum = 0
        let total = this.employeeList.length

        this.employeeList.map(e => sum = sum + e.salary)

        return total > 0 ? sum/total : 0
    }


}

decorate(Store,{
    employeeList: observable,
    addEmployee: action,
    clearEmployeeList:action,
    averageSalary:computed
})

export default Store = new Store()