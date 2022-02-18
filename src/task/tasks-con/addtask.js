import React, { Component } from "react";
import Radio from "./../../component/radio-btn";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import logoimg from "../../logo/logo.png";
import Backimg from "../../images/Backimg.png";
import Other_info1 from "./tasks-info/other_info";
import { useSelector } from "react-redux";
const Add_task = () => {
  const tsk = useSelector((state) => state.custom.taskName);
  const dof = useSelector((state) => state.custom.dateOfFinalization);
  const cmt = useSelector((state) => state.custom.comment);
  const postHandler = () => {
    const data = {
      taskName: tsk,
      dateOfFinalization: dof,
      comment: cmt,
    };
    axios.post("http://localhost:8000/api/v1/timeEntry", data);
  };
  {
    const dispatch = useDispatch();
    const updateDataName = (evt) => {
      dispatch({
        type: "updateDataName",
        val: evt.target.value,
      });
    };
    const updateDataDate = (evt) => {
      dispatch({
        type: "updateDataDate",
        val: evt.target.value,
      });
    };
    const updateDataComment = (evt) => {
      console.log("changed", evt.target.value);

      dispatch({
        type: "comment",
        val: evt.target.value,
      });
    };
    return (
      <div className="add_task">
        <div className="add_task_back">
          <img src={Backimg} alt="" className="add_task_back-img" />
        </div>{" "}
        <div className="add_task-container">
          <div class="main_logo add_task-container-main_logo">
            {" "}
            <img src={logoimg} alt="" class="main_logo-image" />{" "}
          </div>{" "}
          <form className="add_task-form">
            <Other_info1
              Value="Task name"
              Type="text"
              Label="Task name"
              Ph="Task name"
              Name="taskName"
              Change={updateDataName}
            />
            <div className="other-con_sub">
              <div class="form_grp">
                {" "}
                <h3 className="other_info-heading"> Precedence </h3> <Radio />
              </div>{" "}
            </div>{" "}
            <Other_info1
              Value="Date of finalization"
              Type="date"
              Label=""
              Ph=""
              Name="dateOfFinalization"
              Change={updateDataDate}
            />
            <div className="other-con_sub">
              <div class="form_grp">
                {" "}
                <h3 className="other_info-heading"> Add comment </h3>{" "}
                <textarea
                  rows="4"
                  cols="5"
                  class="form_input form_input-1"
                  placeholder="Add comment"
                  id="comment"
                  name="comment"
                  onChange={updateDataComment}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="add_task-form_btn">
              <button
                type="submit"
                className="add_task-form_btn-1"
                onClick={postHandler}
              >
                Submit{" "}
              </button>{" "}
              <button type="" className="add_task-form_btn-1">
                Cancel{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
};
// const mapStateToProps1 = (state) => {
//   return {
//     tsn: state.taskName,
//     pdc: state.precedence,
//     dof: state.dateOfFinalization,
//     cmt: state.comment,
//   };
// };
// const mapDispatchToProps1 = (dispatch) => {
//   return {
//     updateDataName: (evt) => {
//       console.log("changed", evt.target.value);
//       dispatch({ type: "UPDATEDATA_NAME", val: evt.target.value });
//     },
//     updateDataDate: (evt) => {
//       console.log("changed", evt.target.value);
//       dispatch({ type: "UPDATEDATA_DATE", val: evt.target.value });
//     },
//     updateDataComment: (evt) => {
//       console.log("changed", evt.target.value);
//       dispatch({ type: "UPDATEDATA_COMMENT", val: evt.target.value });
//     },
//   };
// };
export default Add_task;
