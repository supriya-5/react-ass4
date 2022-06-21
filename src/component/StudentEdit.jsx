
import React from 'react'

function StudentEdit() {
  return (
   <>
   <form style={{marginTop:"25px"}}>
    <label>Name:</label>
    <input type="text" id="name" />
    <br></br><br></br>
    <label>Age:</label>
    <input type="text" id="age" />
    <br></br><br></br>
    <label>Batch:</label>
    <input type="text" id="batch" />
    <br></br><br></br>
    <label>Course:</label>
    <input type="text" id="course" />
    <br></br><br></br>
   </form>
  
  <button style={{padding:"10px",margin:"15px",borderRadius:"10px",backgroundColor:"aqua"}}>Update</button>
  <button style={{padding:"10px",margin:"15px",borderRadius:"10px",backgroundColor:"aqua"}}>Cancel</button>
   </>

  )
}

export default StudentEdit;