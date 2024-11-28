import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { newBook } from './redux/Slice';
import Display from './Display';

function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    publishedYear: '',
    author: '',
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();

    dispatch((newBook(formData)));
    
  };


  const book = useSelector((store)=> store.book);

  console.log(book);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="string" name="title" onChange={handleChange} placeholder="Enter Title" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Published Year</Form.Label>
        <Form.Control type="" name="publishedYear" onChange={handleChange}  placeholder="Enter Published Year" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="string" name="author" onChange={handleChange} placeholder="Enter Author" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
      </Form>
      <p className="read-the-docs">
      </p>
      <Display></Display>
    </>
  )
}

export default App
