import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./signup-in/signup";
import Task_ui from "./task/task";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sign_in from "./signup-in/signin";
import Layout from "./component/layout";
import Bgimg from "./images/bgimg1.jpg";
import Add_task from "./task/tasks-con/addtask";
import Up from "./user profile/up";
import Error from "./error-page/error";
import Home from "./home_page/home";
import Show from "./task/openTaskPage/taskShow";
import About from "./about/about";
import Contact from "./contact/contact";
import TimeBox from "./task/timebar/time";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {" "}
          {/* <img src={Bgimg} alt="" className="bgimg" />{" "} */}{" "}
          <div className="">
            {" "}
            <Layout />
            {/* <Sign_in /> */}
            {/* <Up /> */}
            {/* <Show /> */}
            {/* <About /> */}
            {/* <Task_ui /> */}
            {/* <Signup /> */}
            {/* <Add_task /> */}
            {/* <Error /> */}
            <Home />
            {/* <Contact /> */}
            {/* <TimeBox /> */}
          </div>{" "}
          <Routes>
            <Route path="/about" exact element={<About />} />{" "}
            <Route path="/signup" exact element={<Signup />} />{" "}
            <Route path="/signin" exact element={<Sign_in />} />{" "}
            <Route path="/addtask" exact element={<Add_task />} />{" "}
            <Route path="/showingTask" exact element={<Show />} />
          </Routes>{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
