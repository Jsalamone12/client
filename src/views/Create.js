import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const [errorList, setErrorList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:8000/api/authors/create`, { name })
            .then(res => navigate('/'))
            .catch(err=>{
                // setErrorList(err.response.data.errors.name.message)
                const errResponseData = err.response.data.errors
                const tempErrArray = []
                for(const eachKey in errResponseData){
                    tempErrArray.push(errResponseData[eachKey].message)
                }
                setErrorList(tempErrArray)
            })
    }

    return (
        <div>
            {
                errorList.map((eachErr, idx)=>(
                    <p className="text-danger"> {eachErr}</p>
                ))
            }
            <form className='form' onSubmit={handleSubmit}>
                <label>Author</label>
                <input type="text" name="name" className='form-control' onChange={event => setName(event.target.value)} />
                <button className='btn btn-success me-2 my-1' type='submit'>Submit</button>
            </form>
            <Link className='btn btn-warning ' to='/'>Cancel</Link>
        </div>
    )
}

export default Create
