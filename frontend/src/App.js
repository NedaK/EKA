import {useState, useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Nav, Navbar, Container, Row, Col, Card, CardGroup }
    from "react-bootstrap";
   
const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);


  useEffect(() => {
    axios
        .get("http://localhost:3001/teachers")
        .then(({ data }) => {
          console.log(data)
            setTeachers(data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

const Teacher_List = () => {
  return teachers.map((item) => {
      return <ListGroup.Item key={item.teacher_id}>{item.teacher_name}</ListGroup.Item>;
  });
};

useEffect(() => {
  axios
      .get("http://localhost:3001/classes")
      .then(({ data }) => {
        console.log(data)
          setClasses(data);
      })
      .catch((error) => {
          console.log(error);
      });
}, []);

const Class_List = () => {
  return classes.map((item) => {
      return <ListGroup.Item key={item.class_id}>{item.class_name}</ListGroup.Item>;
  });
};

useEffect(() => {
    axios
        .get("http://localhost:3001/students")
        .then(({ data }) => {
          console.log(data)
            setStudents(data);
        })
        .catch((error) => {
            console.log(error);
        });
  }, []);
  
  const Student_List = () => {
    return students.map((item) => {
        return <ListGroup.Item key={item.student_id}>{item.student_name}</ListGroup.Item>;
    });
  };
return (
       
    <div className="App">
        
      
        <h1 class="text-center">
            EKA SCHOOL
        </h1>
       
        <Container>
                    
        <CardGroup>
      <Card className="h-50" border='success' bg='info'>
        <Card.Body style={{ maxHeight: "450px",
        overflowY: "auto" }}>
          <Card.Title>Teachers</Card.Title>
          <ListGroup variant="flush">{Teacher_List()}</ListGroup>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total Teachers: {teachers.length}</small>
        </Card.Footer>
      </Card>
      
      <Card className="h-50" border='success' bg='info'>
        
        <Card.Body style={{ maxHeight: "450px",
        overflowY: "auto" }}>
          <Card.Title>Classes</Card.Title>
         
          <ListGroup variant="flush">{Class_List()}</ListGroup>
         
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total Classes: {classes.length}</small>
        </Card.Footer>
      </Card>
      
      <Card className="h-50" border='success' bg='info'>
        <Card.Body style={{ maxHeight: "450px",
        overflowY: "auto" }}>
          <Card.Title>Students</Card.Title>
          <ListGroup variant="flush">{Student_List()}</ListGroup>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total Students: {students.length}</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
   
    </Container>                    

        
    </div>

);
};
export default App;


