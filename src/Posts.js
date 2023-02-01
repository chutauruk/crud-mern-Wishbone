import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FileBase from 'react-file-base64';


function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    // id: "",
    status: "",
    name: "",
    age: "",
    gender: "",
    breed: "",
    color: "",
    weight: "",
    intakedate: "",
    spayed: "",
    vaccinated: "",
    description: "",
    historylog: "",
    selectedFile: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value,
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  console.log(updatedPost._id);

  return (
    <div style={{ width: "25%", margin: "30px 50px", textAlign: "left" }}>
      <h1>List Of All Dogs</h1>
      <Button
        variant="outline-dark"
        style={{ width: "25%", marginBottom: "1rem" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Dog Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="status"
                name="status"
                defaultValue={updatedPost.status || ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="name"
                name="name"
                value={updatedPost.name ? updatedPost.name : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="age"
                name="age"
                value={updatedPost.age ? updatedPost.age : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="gender"
                name="gender"
                value={updatedPost.gender ? updatedPost.gender : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="breed"
                name="breed"
                value={updatedPost.breed ? updatedPost.breed : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="color"
                name="color"
                value={updatedPost.color ? updatedPost.color : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="weight"
                name="weight"
                value={updatedPost.weight ? updatedPost.weight : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="intakedate"
                name="intakedate"
                value={updatedPost.intakedate ? updatedPost.intakedate : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="spayed"
                name="spayed"
                value={updatedPost.spayed ? updatedPost.spayed : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="vaccinated"
                name="vaccinated"
                value={updatedPost.vaccinated ? updatedPost.vaccinated : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="description"
                name="description"
                value={updatedPost.description ? updatedPost.description : ""}
                onChange={handleChange}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="historylog"
                name="historylog"
                value={updatedPost.historylog ? updatedPost.historylog : ""}
                onChange={handleChange}
              />
              <FileBase
               type = "file"
               multiple={false}
               onDone={({base64}) => setUpdatedPost({ ...updatedPost, selectedFile: base64})}
               />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div class="doodle"
                key={post._id}
                style={{
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <h2>{post.status}</h2>
                <h1>{post.name}</h1>
                <img src={post.selectedFile} alt="New Dog Added" />  
                <p>{post.age}</p>
                <p>{post.gender}</p>
                <p>{post.breed}</p>
                <p>{post.color}</p>
                <p>{post.weight}</p>
                <p>{post.intakedate}</p>
                <p>{post.spayed}</p>
                <p>{post.vaccinated}</p>
                <p>{post.description}</p>
                <p>{post.historylog}</p>
                

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outline-dark"
                    onClick={() => updatePost(post)}
                    style={{ width: "25%", marginRight: "1rem" }}
                  >
                    {" "}
                    {/* outline-info */}
                    UPDATE
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-dark"
                    style={{ width: "25%", marginRight: "1rem" }}
                  >
                    {" "}
                    {/* outline-danger */}
                    DELETE
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Posts;
