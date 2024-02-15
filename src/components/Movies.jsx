import React, {useEffect, useState} from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000'
})

const MoviesContext = React.createContext({
  movies: [], fetchMovies: () => {}
})


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({
      item: '',
      description: ''
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
        item: '',
        description: ''
      })
      
    }
 
    return (
        <div className='container'>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="item" className='form-label'>
                Movie Title
              </label>
              <br></br>
              <input type='text' className='form-control' id='item' name='item' onChange={handleInputChange} value={formData.item}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className='form-label'>
                Description
              </label>
              <br></br>
              <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
            </div>
              <button type='submit' className='btn btn-primary'>
                Add Movie
              </button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                <tr key={movie.id}>
                  <td>{movie.item}</td>
                  <td>{movie.description}</td>
                </tr>
              })}
            </tbody>
          </table>
          
        </div>
      )
  }
