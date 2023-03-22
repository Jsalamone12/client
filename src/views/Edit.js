import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link} from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState()
    // const [author, setAuthor] = useState()
    const navigate = useNavigate()
    const [errorList, setErrorList] = useState([])
    const [loaded, setLoaded] = useState(false)

    const { _id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}/getOne`)
            .then(res => {
                // const author = res.data
                // console.log(author)
                console.log(res.data)
                // setAuthor(res.data)
                setName(res.data.name)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${_id}/update`, {name})
            .then(res=>navigate(`/`))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            {/* {
                errorList.map((eachErr, idx) => (
                    <p className="text-danger"> {eachErr}</p>
                ))
            } */}
            {/* {author && author.name} */}
            { name && 
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <label>Author</label>
                    <input type="text" name="name" className='form-control' value={name} onChange={event => setName(event.target.value)} />
                    <button className='btn btn-success me-2 my-1' type='submit'>Submit</button>
                </form>
                <Link className='btn btn-warning ' to='/'>Cancel</Link>
            </div> 
}
        </div>
    )
}

export default Edit
