import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
    relationship: "",
    education: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // await axios.post("https://664f4d11fafad45dfae33698.mockapi.io/api/v1/users", user)
    dispatch(createUser(user)); //dawng ky 1 lan
  }; //suawr user, delete user
  return (
    <div style={{ position: "absolute", top: "20%", left: "20%" }}>
      <input
        type="text"
        name="name"
        placeholder="username"
        onChange={handleChange}
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <br /> <br />
      <select name="relationship" onChange={handleChange}>
        <option value="">----relationship----</option>
        <option value="married">Married</option>
        <option value="alone">Alone</option>
      </select>{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="Education"
        name="education"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleRegister}>Đăng ký đi</button>
    </div>
  );
};

export default Register;
