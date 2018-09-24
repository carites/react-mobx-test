import React from 'react'

const Row = (props) =>{
    return(
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.salary}</td>
        </tr>
    )
}
export default Row