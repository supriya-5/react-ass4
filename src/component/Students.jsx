
import React from 'react'
import {Link} from 'react-router-dom';


function Students() {

 
  return (
    <>
    <h1>Students Details</h1>
    <Link to="/NewStudents">
    <button  
    style={{padding:"10px",margin:"15px",borderRadius:"10px",backgroundColor:"aqua"}}>Add students</button></Link>
    <table className="table table-bordered border-primary" style={{backgroundColor:"white", marginTop:"120px"}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Vishnu</td>
      <td>20</td>
      <td>Mern</td>
      <td>april</td>
      <td><Link to = "/studentEdit">Edit</Link></td>
    </tr>
    <tr>
    <td>Durga</td>
      <td>20</td>
      <td>Mean</td>
      <td>may</td>
      <td><Link to = "/StudentEdit">Edit</Link></td>
     
    </tr>
    <tr>
     
    <td>thenmozhi</td>
      <td>22</td>
      <td>frontend</td>
      <td>october</td>
      <td><Link to = "/StudentEdit">Edit</Link></td>
    </tr>

   
  </tbody>
</table>
</>
  )
}

export default Students