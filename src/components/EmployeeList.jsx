
import { useEffect, useState } from "react";

export const EmployeeList = () => {

    const [Employeelist, setEmployeelist] = useState([]);
    
    useEffect(() =>{
        getData();
    },[]);

    async function getData(){

        const data = await fetch("http://localhost:8080/employee").then((data) =>
            data.json()
        )

        setEmployeelist(data);
    }
    console.log('Employeelist:', Employeelist)

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {Employeelist.map((element) =>{
            return (
                <div style={{border : "1px solid"}} className="employee_card">
                    <img className="employee_image" alt="" />
                    <span className="employee_name">element.employee_name</span>
                    <span className="employee_title">element.title</span>
                </div>
            )
        })}
      </div>
    );

  };