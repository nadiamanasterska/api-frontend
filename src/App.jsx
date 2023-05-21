import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Student from './Student'
import { v4 as uuidv4 } from 'uuid';

const API_STUDENTS = 'http://127.0.0.1:8000/students/'


function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(API_STUDENTS).then((response) => console.log(response.json().then((data) => setStudents(data.students))))
  }, [])


  return (
    <div className='app-container'>
      <h3>Students: </h3>
      {students.map((student) => (
        <Student
          key={uuidv4()}
          name={student.first_name}
          surname={student.last_name}
        />
      ))}
      
    </div>
  )
}

export default App

// test