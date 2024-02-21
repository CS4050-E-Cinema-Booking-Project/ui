import React, {useEffect, useState} from "react";
import axios from 'axios'
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";

const api = axios.create({
  baseURL: 'http://localhost:8000'
})

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      image: ''
    });

    const fetchMovies = async () => {
      const response = await api.get('/movies/');
      setMovies(response.data)
    }

    useEffect(() => {
      fetchMovies()
    }, []);

    const handleInputChange = (event) => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      setFormData({
        ...formData,
        [event.target.name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      await api.post('/movies/',formData);
      fetchMovies();
      setFormData({
        title: '',
        description: '',
        image: ''
      })
      
    }

    function DeleteMovie({id}) {
    
      const deleteMovie = async () => {
        await fetch(`http://localhost:8000/movies/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: { "id": id }
        })
        await fetchMovies()
      }
    
      return (
        <button h="1.5rem" size="sm" onClick={deleteMovie}>Delete Movie</button>
      )
  }

  function MovieHelper({ id, fetchMovies}) {
    return (
      <div>
          <UpdateMovie id={id} fetchMovies={fetchMovies}/>
          <DeleteMovie id={id} fetchMovies={fetchMovies}/>
      </div>
              
    )
  }

  function BookMovie({id}) {

    return (
      <NavLink to={`/purchase-tickets/${id}`}>Book</NavLink>
    );
  
  }

  function UpdateMovie({id}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [title, setTitle] = useState(id)
    const [desc, setDesc] = useState(id)

    const updateMovie = async () => {
        await fetch(`http://localhost:8000/movies/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            given_id: id,
            given_title: title,
            given_desc: desc
           })
        })
        onClose()
        await fetchMovies()
      }
    
      return (
        <>
          <Button h="1.5rem" size="sm" onClick={onOpen}>Update Movie</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
              <ModalHeader>Update Movie</ModalHeader>
              <ModalCloseButton/>
              <ModalBody>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Add a Movie"
                    aria-label="Add a Movie"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                  />
                <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Add a Movie"
                    aria-label="Add a Movie"
                    value={desc}
                    onChange={event => setDesc(event.target.value)}
                  />
                </InputGroup>
              </ModalBody>
      
              <ModalFooter>
                <Button h="1.5rem" size="sm" onClick={updateMovie}>Update Movie</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
  }

 
    return (
        <div className='container'>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className='form-label'>
                Movie Title
              </label>
              <br></br>
              <input type='text' id='title' name='title' onChange={handleInputChange} value={formData.title}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className='form-label'>
                Description
              </label>
              <br></br>
              <input type='text' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className='form-label'>
                Image
              </label>
              <br></br>
              <input type='text' id='image' name='image' onChange={handleInputChange} value={formData.image}/>
            </div>
              <button type='submit'>
                Add Movie
              </button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.description}</td>
                  <td><img src={movie.image} alt="" width={150} height={150}/></td>
                  <td><MovieHelper id={movie.id} fetchMovies={fetchMovies} /> </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      )
  }
