import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


const AddModal = ({movies, setMovies}) => {
   
    const [addTitle, setAddTitle] = useState("");
    const [addDate, setAddDate] = useState("");
    const [addImage, setAddImage] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addType, setAddType] = useState("");
    const [addRating, setAddRating] = useState(0);
    const [show, setShow] = useState(false);

const handleShow = () => {
    setShow(!show);
}
  

    return(
        <div>
            <Button style={{float:'left',marginTop:"3px"}} variant="primary" onClick={handleShow}> + Add Movie</Button>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header >
                    <Modal.Title>Add new Movie</Modal.Title>
                </Modal.Header>
                
  <Modal.Body>
      <Form>
      <div>
      <Form.Label className="input">Title:</Form.Label>
      <Form.Control type="text" name="name" onChange = {(event) =>
    setAddTitle(event.target.value)} />
         
      </div>
      <div>
      <Form.Label className="input">Date:</Form.Label>
      <Form.Control type="text" name="date" onChange = {(event) =>
    setAddDate(event.target.value)} />
         
      </div>
      <div>
      <Form.Label className="input">Image:</Form.Label>
      <Form.Control type="text" name="image" onChange = {(event) =>
    setAddImage(event.target.value)} />
          
      </div>
      <div>
      <Form.Label className="input">Description:</Form.Label>
      <Form.Control type="text" name="discription" onChange = {(event) =>
    setAddDescription(event.target.value)} />
          
      </div>
      <div>
      <Form.Label className="input">Type:</Form.Label>
      <Form.Control type="text" name="type" onChange ={(event) =>
    setAddType(event.target.value)} />
          
      </div>
      <div>
      <Form.Label className="input">Rating:</Form.Label>
      <Form.Control type="number" name="rating" onChange = {(event) =>
    setAddRating(event.target.value)}/>
          
      </div>
      </Form>
  </Modal.Body>
  
  <Modal.Footer>
    
    <Button variant="primary"  onClick={(e) =>{
                    e.preventDefault()
                    setMovies([...movies,
                    {
                        id: Math.random(),
                        name: addTitle,
                        date: addDate,
                        image: addImage,
                        description: addDescription, 
                        type: addType,
                        rating: addRating 
                    }
                    ]);
                   handleShow(

                   )
                   }
                }
                    
                    > + Add Movie</Button>
  </Modal.Footer>
            </Modal>


        </div>
    )
}

 

export default AddModal;