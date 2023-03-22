import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const GetAll = () => {
    const [authorList, setAuthorList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/getAll`)
            .then(res => {
                setAuthorList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/authors/${deleteId}/deleteOne`)
        .then(res=>{
            const filteredlist = authorList.filter((eachAuthor)=>eachAuthor._id !== deleteId)
            setAuthorList(filteredlist)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <p><Link to="/author/create">add an Author</Link></p>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Author: </th>
                        <th>Action: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((eachAuthor, _id) => (
                            <tr key={_id}>
                                <td>{eachAuthor.name}</td>
                                <td><Link className='btn btn-warning' to={`/authors/${eachAuthor._id}/update`}>Edit</Link></td>
                                <td><button className='btn btn-danger' onClick={()=>handleDelete(eachAuthor._id)}>Delete</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetAll
