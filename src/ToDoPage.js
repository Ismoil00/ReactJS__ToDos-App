import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaHeart } from "react-icons/fa";

const ToDoPage = ({ toDos, handleDelete, addToFavorite }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id.toString() === id);

  setTimeout(colorHeart, 100);

  function colorHeart() {
    if (toDo.liked === true) {
      const heartIcon = document.getElementById(`${toDo.id}`);
      heartIcon.classList.add("heartIconColored");
    }
  }

  return (
    <main className="showToDo">
      {toDo && (
        <>
          <h2>{toDo.name}</h2>
          <p className="showToDo_Dates">
            {toDo.startPoint && toDo.endPoint
              ? `from: ${toDo.startPoint} — to: ${toDo.endPoint}`
              : toDo.startPoint && !toDo.endPoint
              ? `from: ${toDo.startPoint}`
              : !toDo.startPoint && toDo.endPoint
              ? `to: ${toDo.endPoint}`
              : ""}
          </p>
          <p className="showToDo_Frequency">
            {toDo.frequency ? toDo.frequency : ""}
          </p>
          <p className="showToDo_Description">
            {toDo.description ? toDo.description : ""}
          </p>
          <div className="showToDo_Btns">
            <Link to={`/edit/${toDo.id}`}>
              <FaEdit
                role="button"
                aria-label={`Edit ${toDo.name}`}
                className="editIcon"
              />
            </Link>
            <FaHeart
              role="button"
              title="add to Favorite"
              id={toDo.id}
              onClick={() => addToFavorite(toDo.id)}
              className="heartIcon"
            />
            <Link to="/">
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete(toDo.id)}
                aria-label={`Delete ${toDo.name}`}
                className="trashIcon"
              />
            </Link>
          </div>
          <Link to="/">
            <button className="goBackBtn">
              <span id="arrowLeft">&#60;</span>Go Back
            </button>
          </Link>
        </>
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

export default ToDoPage;
