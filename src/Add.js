import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal,Form,Row,Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onStarClick = (nextValue, prevValue, name) =>{
        setNewMovie({...newMovie,rate:nextValue})
    }

    const [newMovie, setNewMovie] = useState({
        title:"",
        rate:1,
        duration:"",
        genre:"",
        main_img:"",
        description:""
    })

    const handleChange=(e) => {
        setNewMovie ({...newMovie,[e.target.name]:e.target.value})
    }
          
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add a movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Row className="mb-3">
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
           value={newMovie.rate}
           onStarClick={onStarClick}
        />
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="title" />
    </Form.Group> 
     
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>image url </Form.Label>
      <Form.Control type="password" placeholder="image url" onChange={handleChange}  name="main_img"/>
    </Form.Group>
  </Row>

 <Form.Group className="mb-3" controlId="exampleForm.Controldescription">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={handleChange} name="description"/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridduration">
      <Form.Label>Duration</Form.Label>
      <Form.Control onChange={handleChange} name="duration" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Select defaultValue="Choose value" onChange={handleChange} name="genre">
        <option>Action</option>
        <option>Fantasy</option>
        <option>Adventure</option>
      </Form.Select>
    </Form.Group>


  </Row>


</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default Add
