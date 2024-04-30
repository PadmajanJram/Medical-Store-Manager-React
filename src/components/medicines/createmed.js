import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from 'react-redux';
import checkAuth from "../auth/checkAuth";
import { Link } from "react-router-dom";

function Add() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const navigate = useNavigate();
    const user = useSelector(store => store.auth.user);

    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine', {
            name: name,
            company: company,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization': "Bearer " + user.token }
        }).then(response => {
            navigate('/medicines');
        }).catch(error => {
            console.error('Error adding post:', error);
        });
    }

    return (
        <div>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <div className="container card bg-dark">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Add Medicine</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input 
                         type="text" 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div>
                         <label>Expiry Date</label>
                           <input 
                            type="date" 
                            className="form-control" 
                            value={expiry_date} 
                            onChange={(event)=>{setExpiry_date(event.target.value)}}
                            />
                   </div>
                     <div className="form-group mt-3">
                     <button className="btn btn-primary" onClick={addPost}>Add Medicine</button>
                     </div>  
                     <Link to="/medicines" className="btn btn-dark mt-3 +">Back</Link> 

            </div>
        </div>
        </div>
                  
        </div>
    ); 
}

export default checkAuth(Add);