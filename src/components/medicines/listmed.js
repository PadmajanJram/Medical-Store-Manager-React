import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Postmeditem from './postmeditem';

function List() {
  const user = useSelector(store => store.auth.user);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (user && user.token) {
        fetchPosts();
    } else {
        console.error('User is not logged in.');
    }
  }, [user]);

  function fetchPosts() {
    axios.get('https://medicalstore.mashupstack.com/api/medicine', {
      headers: { 'Authorization': "Bearer " + user.token }
    })
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  }

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    fetchPosts(); 
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-8 offset-2">
          <br /><br />
          <Link to="/medicines/create" className="btn btn-primary mb-3">Add Medicine</Link>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          {filteredPosts.map(post => <Postmeditem key={post.id} post={post} refresh={fetchPosts} />)}
        </div>
      </div>
    </div>
  );
}

export default checkAuth(List);
