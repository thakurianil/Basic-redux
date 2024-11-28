import React from 'react'
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
function Display() {
    const book = useSelector((store)=> store.book.book);

    return (
    <div>
        <h3>This is after you submitted the form</h3>
      <h1>Title</h1>{book.title}
      <br></br>
      <h3>Published Year</h3>
      {book.publishedYear}
      <br></br>
<h3>Author</h3>
      {book.author}

    </div>
  )
}

export default Display;


