import Students from "./StudentsInfor"

const Student = () => {
    return(
        <>
        {Students.map(student => (
                 <tr>
                 <td>{student.company}</td>
                 <td>{student.contact}</td>
                 <td>{student.country}</td>
               </tr>
            ))}
        </>
    )
}
 
   


  export default Student