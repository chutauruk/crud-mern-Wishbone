// import logo from "./WishboneIcon.svg";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Icon from "./wishboneicon";
// import { useState } from "react";

// console.log(logo);



function App() {
  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setPost((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  
  // function CreatePost() {
  //   const navigate = useNavigate();
  //   const [post, setPost] = useState({
  //     username: "",
  //     password: "",
  //   });
  // }


  return (
    <div style={{ width: "25%", margin: "auto auto", textAlign: "center" }}>
      <h1>Wishbone App</h1>

      <Icon></Icon>
      <Form>
        <Form.Group>
          <Form.Label>Sign in with your Wishbone credentials</Form.Label>
          <Form.Control
            name="username"
            // value={post.username}
            placeholder="Email Address/Username"
            style={{ marginBottom: "1rem" }}
            // onChange={handleChange}
          />
          <Form.Control
            name="password"
            // value={post.password}
            placeholder="Password"
            style={{ marginBottom: "1rem" }}
            // onChange={handleChange}
            type="password"
          />
        </Form.Group>
      <Button
        variant="outline-dark" 
        style={{ width: "100%" }}
        onClick={() => navigate("create")}
      >
        SUBMIT
      </Button>
      </Form>
    </div>
  );
}

export default App;
