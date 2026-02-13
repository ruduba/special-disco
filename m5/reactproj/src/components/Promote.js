import { useState } from "react";


function Promote() {

    const [employees, setEmployees] = useState(['Anu', 'Milind', 'Surya', 'Ramesh', 'Kiran']);

    return (
        <>
            <h1>Employee Promotion Module</h1>
            <table>
                <thead>
                    <th> EID </th>
                    <th> Employee Name </th>
                    <th> Promote </th>

                </thead>

                <tbody>
                    {

                        employees.map((emp, index) => (
                             <tr>
                                <td>{index+1}</td>
                                <td> <strong>{emp}</strong> </td>
                                <td>
                                    <button>Promote</button>
                                </td>
                            </tr>

                        )
                           
                        )

                    }

                </tbody>
            </table>





        </>

    )
}


export default Promote;