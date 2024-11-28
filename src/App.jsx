import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { newBook } from './redux/Slice';
import Display from './Display';

function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    publishedYear: '',
    author: '',
  });
  const [errors, setErrors] = useState({});
  
  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.title || !formData.publishedYear || !formData.author) {
      setErrors({
        title: formData.title ? '' : 'Title is required.',
        publishedYear: formData.publishedYear ? '' : 'Published Year is required.',
        author: formData.author ? '' : 'Author is required.',
      });
      return;
    }

    // Dispatching the action to add the new book
    dispatch(newBook(formData));
    setFormData({ title: '', publishedYear: '', author: '' }); // Clear form after submission
  };

  const book = useSelector((store) => store.book);

  console.log(book);

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? '' : prevErrors[name], // Clear the error message when user starts typing
    }));
  };

  return (
    <div className="container mt-5">
      {/* Logo and Heading */}
      <div className="text-center mb-5">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react mb-3" alt="React logo" style={{ width: '100px' }} />
        </a>
        <h1 className="display-4 text-primary">Vite + React</h1>
      </div>

      {/* Form Card */}
      <Card className="mb-4" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Add New Book</Card.Title>
          <Form onSubmit={handleOnSubmit}>
            {/* Title Input */}
            <Form.Group className="mb-4" controlId="formTitle">
              <Form.Label className="text-muted">Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter Book Title"
                isInvalid={!!errors.title}
                required
                className="form-control-lg rounded-3"
              />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>

            {/* Published Year Input */}
            <Form.Group className="mb-4" controlId="formPublishedYear">
              <Form.Label className="text-muted">Published Year</Form.Label>
              <Form.Control
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                placeholder="Enter Published Year"
                isInvalid={!!errors.publishedYear}
                required
                className="form-control-lg rounded-3"
              />
              <Form.Control.Feedback type="invalid">{errors.publishedYear}</Form.Control.Feedback>
            </Form.Group>

            {/* Author Input */}
            <Form.Group className="mb-4" controlId="formAuthor">
              <Form.Label className="text-muted">Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter Author Name"
                isInvalid={!!errors.author}
                required
                className="form-control-lg rounded-3"
              />
              <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="success" type="submit" size="lg" className="px-5 py-2 rounded-3">
                Add Book
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Display Card */}
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Books List</Card.Title>
          <div className="text-center">
            <Display />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
