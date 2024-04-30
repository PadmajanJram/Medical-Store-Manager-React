import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import { Link } from "react-router-dom";
function Edit() {
    const { postId } = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const user = useSelector(store => store.auth.user);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: { 'Authorization': "Bearer " + user.token }
        })
        .then(response => {
            setName(response.data.name);
            setCompany(response.data.company);
            setExpiry_date(response.data.expiry_date);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
        });
    }, [postId, user.token]);

    function updatePost() {
        axios.post(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            name: name,
            company: company,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization': "Bearer " + user.token }
        })
        .then(response => {
            alert(response.data.message);
            navigate('/medicines');
        })
        .catch(error => {
            console.error('Error updating post:', error);
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Update Medicine</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company:</label>
                            <input 
                                className="form-control" 
                                value={company} 
                                onChange={(event) => setCompany(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry date</label>
                            <input 
                                className="form-control" 
                                value={expiry_date} 
                                onChange={(event) => setExpiry_date(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                        </div>     
                        <Link to="/medicines" className="btn btn-dark mt-3 +">Back</Link>               
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(Edit);