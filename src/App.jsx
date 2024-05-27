import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import FriendProfile from "./pages/friend-profile/FriendProfile";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/userAction";
import Register from "./components/formlogin/Register";
import Table from "./components/table/Table";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []); //{type, payload}
  return (
    <>
      <Header />
      {/* <Register /> */}
      <Table />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile/*" element={<Profile />} />
        <Route path="/:nickname" element={<FriendProfile />} />
      </Routes> */}
    </>
  );
}

export default App;
