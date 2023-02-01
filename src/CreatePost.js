import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import FileBase from "react-file-base64";
import Meet from "./petsmartmap";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    age: "",
    breed: "",
    color: "",
    weight: "",
    intakedate: "",
    vaccinated: "",
    description: "",
    historylog: "",
    status: "",
    gender: "",
    spayed: "",
    selectedFile: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //   useEffect(() => {
  //     console.log(post);
  //   }, [post]);

  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
      {/* Changed from 90% and auto auto */}
      <h1>Welcome to Wishbone</h1>
      <br></br>

      <h3>Your Nearest Meet and Greet Event:</h3>
      <div>
        <Meet></Meet>
        <a
          href="https://www.latlong.net/c/?lat=39.653679&long=-104.997002"
          target="_blank"
          rel="noreferrer"
        >
          (39.653679, -104.997002)
        </a>
      </div>
      <br></br>
      <h2>Create a New Dog Profile</h2>
      <Form>
        <Form.Group>
          <Form.Control
            name="status"
            value={post.status}
            placeholder="Status"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="name"
            value={post.name}
            placeholder="Name"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="age"
            value={post.age}
            placeholder="Age"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="gender"
            value={post.gender}
            placeholder="Gender"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="breed"
            value={post.breed}
            placeholder="Breed"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="color"
            value={post.color}
            placeholder="Color"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="weight"
            value={post.weight}
            placeholder="Weight"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="intakedate"
            value={post.intakedate}
            placeholder="Intake Date"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="spayed"
            value={post.spayed}
            placeholder="Fixed"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="vaccinated"
            value={post.vaccinated}
            placeholder="Vaccinated"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="description"
            value={post.description}
            as="textarea"
            placeholder="Description"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="historylog"
            value={post.historylog}
            as="textarea"
            placeholder="History Log"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.File label="Select an image of your foster:" />
          </Form.Group> */}

        {/* <Form.Group>
            <Form.Label>
                Status: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Form.Label>
            <Form.Check name="status" label="Active" inline type="radio" />
            <Form.Check name="status" label="Inactive" inline type="radio" />
            </Form.Group>

            <Form.Group>
            <Form.Label>
                Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Form.Label>
            <Form.Check name="gender" label="Male" inline type="radio"/>
            <Form.Check name="gender" label="Female" inline type="radio" />
            </Form.Group>

            <Form.Group>
            <Form.Label>
                Spayed/Neutered: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Form.Label>
            <Form.Check name="spayed" label="Intact" inline type="radio"/>
            <Form.Check name="spayed" label="Fixed" inline type="radio"/>
            <input type="file" />
            
            {/* <Button variant="outline-dark"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={handleClick} type="submit">UPLOAD</Button> */}
        {/* </Form.Group> */}
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
        />
        <Button
          variant="outline-dark"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={handleClick}
        >
          CREATE PROFILE
        </Button>
      </Form>
      <Button
        variant="outline-dark"
        style={{ width: "100%" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </div>
  );
}

export default CreatePost;
