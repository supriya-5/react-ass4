
import React from 'react'
import {useState} from 'react'

function NewStudents() {
  
    const [displayData, setDisplayData] = useState([]);
    const [inputValue, setInputValue] = useState({
      Name: "",
      Age: "",
      Course: "",
      Batch:"",
    });
    

   
  
    const handleInput = (e) => {
      const value = e.target.value;
  
      setInputValue({
        ...inputValue,
        [e.target.name]: value,
      });
    };
  
    const onsubmit = (e) => {
      e.preventDefault();
      const checkEmptyInput = e.target.value;
      if (checkEmptyInput !== "") {
        const data = inputValue;
        setDisplayData([...displayData, data]);
  
        const emptyInput = { Name: "", Age: "", Course: "",Batch:""};
        setInputValue(emptyInput);
      }
    };
  
    return (
      <>
        <div className="form" style={{marginTop:"20px"}}>
          <form onSubmit={onsubmit} >
            <label >Name:</label>
            <input
              type="text"
              name="Name"
              id="Name"
              required
              value={inputValue.Name}
              onChange={handleInput}
            />
            <br></br> <br></br>
            <label >Age:</label>
            <input
              type="text"
              name="Age"
              id="Age"
              required
              value={inputValue.Age}
              onChange={handleInput}
            />
             <br></br> <br></br>
            <label >Course:</label>
            <input
              type="text"
              name="Course"
              id="Course"
              required
              value={inputValue.Course}
              onChange={handleInput}
            />
           <br></br> <br></br>
           <label >Batch:</label>
            <input
              type="text"
              name="Batch"
              id="Batch"
              required
              value={inputValue.Batch}
              onChange={handleInput}
            />
           <br></br> <br></br>
            <input type="submit" id="submit" />
          </form>
        </div>
        </>
  )
}

export default NewStudents