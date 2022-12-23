import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Edit = ({
  toDos,
  editTask,
  setEditTask,
  editDescription,
  setEditDescription,
  editFrequency,
  setEditFrequency,
  editStartPoint,
  setEditStartPoint,
  editEndPoint,
  setEditEndPoint,
  submitEditedToDo,
}) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id.toString() === id);

  useEffect(() => {
    if (toDo) {
      setEditTask(toDo.name);
      setEditDescription(toDo.description);
      setEditFrequency(toDo.frequency);
      setEditStartPoint(toDo.startPoint);
      setEditEndPoint(toDo.endPoint);
    }
  }, [
    setEditTask,
    setEditDescription,
    setEditFrequency,
    setEditStartPoint,
    setEditEndPoint,
  ]);

  return (
    <main>
      {toDo && (
        <form className="editSec" onSubmit={(e) => e.preventDefault()}>
          <div className="newToDo_Div">
            <label htmlFor="newTask" className="newToDo_Label">
              Task:{" "}
            </label>
            <input
              type="text"
              required
              className="newToDo_Input"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
          </div>
          <div className="newToDo_Div">
            <label htmlFor="description" className="newToDo_Label">
              Description:{" "}
            </label>
            <textarea
              type="text"
              className="newToDo_Input textArea"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
          <div className="newToDo_Div">
            <label htmlFor="frequency" className="newToDo_Label">
              Frequency:{" "}
            </label>
            <input
              type="text"
              className="newToDo_Input"
              value={editFrequency}
              onChange={(e) => setEditFrequency(e.target.value)}
            />
          </div>
          <div className="newToDo_Div">
            <label htmlFor="startPoint" className="newToDo_Label">
              Start Date:{" "}
            </label>
            <input
              type="date"
              className="newToDo_Input"
              value={editStartPoint}
              onChange={(e) => setEditStartPoint(e.target.value)}
            />
          </div>
          <div className="newToDo_Div">
            <label htmlFor="endPoint" className="newToDo_Label">
              End Date:{" "}
            </label>
            <input
              type="date"
              className="newToDo_Input"
              value={editEndPoint}
              onChange={(e) => setEditEndPoint(e.target.value)}
            />
          </div>
          <div className="newToDo_Btns">
            <Link to="/">
              <button className="goBackBtn">Cancel</button>
            </Link>
            <button
              type="submit"
              className="goBackBtn"
              onClick={() => submitEditedToDo(toDo.id)}
            >
              Save Edits
            </button>
          </div>
        </form>
      )}
      {!toDo && (
        <div className="Missing">
          <h2>Page Not Found</h2>
          <p>
            <Link to="/">Please, Visit Our Homepage!</Link>
          </p>
        </div>
      )}
    </main>
  );
};

export default Edit;
