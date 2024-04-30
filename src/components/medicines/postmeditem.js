import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function PostListItem({ post, refresh }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((store) => store.auth.user);

  function deletePost() {
    axios
      .delete(
        `https://medicalstore.mashupstack.com/api/medicine/${post.id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
      .then((response) => {
        refresh();
        setShowModal(false); // Close modal after successful deletion
      });
  }

  return (
    <div className="card">
      <div className="card-body">
        {post.name}
        <button
          className="btn btn-danger float-right"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>
        <Link
          to={"/medicines/" + post.id + "/edit"}
          className="btn btn-success float-right"
        >
          Edit
        </Link>
        <Link to={"/medicines/" + post.id} className="btn btn-info float-right">
          View
        </Link>
      </div>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this post?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={deletePost}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      ></div>
    </div>
  );
}

export default checkAuth(PostListItem);
