
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';
import {  Paper } from '@mui/material';
import React,{useEffect, useState} from 'react';
import { Button } from '@mui/material';



export default function Student() {
const paperStyle={padding:'50px 20 px',width:600,margin:"20px auto"}
const[name,SetName]=useState('')
const[address,setAddress]=useState('')

const[student,setStudent]=useState([])



const handClick=(e)=>{
  e.preventDefault()
  const student={name,address}
  console.log(student)

fetch("http://localhost:8080/student/add",{
method:"POST",
headers:{"Content-Type":"aplication/json"},
body:JSON.stringify(student)
 
})
.then(()=>{
console.log("New Student added")

})
}

useEffect(()=>{
fetch("http://localhost:8080/student/getAll")
.then(res=>res.json())
.then((result)=>{
  setStudent(result);
}
)
},[])
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}  onClick={handClick}>
        <h1>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>SetName(e.target.value)}
      
      />
      
      
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      
      />
     
        
   
    <Button variant="contained" color="secondary">
        Submit
      </Button>
      </Box>
  
</Paper >
<h1>Student</h1>

<Paper elevation={15} style={paperStyle}>

{student.map(student=>(
  <Paper elevation ={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={student.id}>
    Id:{student.id}<br/>
   Name  : {student.name}<br/>
 Address  : {student.address}<br/>

</Paper>
))
}  




</Paper>


    </Container>

    
  );
    }