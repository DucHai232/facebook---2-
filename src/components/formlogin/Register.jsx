import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  // Formik
  /**
   * initialValues: giá trị khởi tạo (hay là giá trị ban đầu)
   * validationSchema: sẽ giúp check validate của những cái field nằm trong giá trị khởi tạo
   *
   * */
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      relationship: "",
      education: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên vào"),
      password: Yup.string()
        .required("Vui lòng nhập password")
        .min(8, "Vui lòng nhập ít nhất 8 ký tự")
        .max(16, "Không nhập quá 16 ký tự"),
      relationship: Yup.string().required("Vui lòng nhập mối quan hệ"),
      education: Yup.string().required("Vui lòng nhập học vấn"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://664f4d11fafad45dfae33698.mockapi.io/users",
          values
        );
        formik.handleReset(); //resset lại giá initvalue
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  //post("link api", data, ....)
  //End formik
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
    relationship: "",
    education: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //key : value name: Đức Hải
  };

  const handleRegister = async () => {
    await axios.post(
      `https://664f4d11fafad45dfae33698.mockapi.io/api/v1/users/123`,
      user
    );
    dispatch(createUser(user)); //dawng ky 1 lan
  }; //suawr user, delete user
  return (
    <div style={{ position: "absolute", top: "20%", left: "20%" }}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && (
          <p>{formik.errors.name}</p>
        )}
        <br /> <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p>{formik.errors.password}</p>
        )}
        <br /> <br />
        <select
          name="relationship"
          onChange={formik.handleChange}
          value={formik.values.relationship}
          onBlur={formik.handleBlur}
        >
          <option value="">----relationship----</option>
          <option value="married">Married</option>
          <option value="alone">Alone</option>
        </select>
        {formik.errors.relationship && formik.touched.relationship && (
          <p>{formik.errors.relationship}</p>
        )}
        <br /> <br />
        <input
          type="text"
          placeholder="Education"
          name="education"
          onChange={formik.handleChange}
          value={formik.values.education}
          onBlur={formik.handleBlur}
        />
        {formik.errors.education && formik.touched.education && (
          <p>{formik.errors.education}</p>
        )}
        <br />
        <br />
        <button type="submit"> Đăng ký đi</button>
      </form>
    </div>
  );
};

export default Register;
