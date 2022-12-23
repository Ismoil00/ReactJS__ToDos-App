import React from "react";
import { Link } from "react-router-dom";

const NewToDo = ({
  setTask,
  setDescription,
  setFrequency,
  setStartPoint,
  setEndPoint,
  submitNewToDo,
}) => {
  return (
    <main>
      <form onSubmit={submitNewToDo} className="newToDo">
        <div className="newToDo_Div">
          <label htmlFor="newTask" className="newToDo_Label">
            Task:{" "}
          </label>
          <input
            type="text"
            required
            onChange={(e) => setTask(e.target.value)}
            className="newToDo_Input"
            placeholder="Type your task"
          />
        </div>
        <div className="newToDo_Div">
          <label htmlFor="description" className="newToDo_Label">
            Description:{" "}
          </label>
          <textarea
            type="text"
            className="newToDo_Input textArea"
            placeholder="Give more details"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="newToDo_Div">
          <label htmlFor="frequency" className="newToDo_Label">
            Frequency:{" "}
          </label>
          <input
            type="text"
            className="newToDo_Input"
            placeholder="How often"
            onChange={(e) => setFrequency(e.target.value)}
          />
        </div>
        <div className="newToDo_Div">
          <label htmlFor="startPoint" className="newToDo_Label">
            Start Date:{" "}
          </label>
          <input type="date" className="newToDo_Input" onChange={(e) => setStartPoint(e.target.value)} />
        </div>
        <div className="newToDo_Div">
          <label htmlFor="endPoint" className="newToDo_Label">
            End Date:{" "}
          </label>
          <input type="date" className="newToDo_Input" onChange={(e) => setEndPoint(e.target.value)} />
        </div>
        <div className="newToDo_Btns">
          <Link to="/">
            <button className="goBackBtn">Cancel</button>
          </Link>
          <button type="submit" className="goBackBtn">
            Save Task
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewToDo;
