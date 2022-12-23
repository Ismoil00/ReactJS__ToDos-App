import React from "react";
import { Link } from "react-router-dom";
import {
  FaTrashAlt,
  FaAngleDoubleRight,
  FaEdit,
  FaHeart,
} from "react-icons/fa";

const List = ({ toDo, handleDelete, handleCheck, addToFavorite }) => {
  return (
    <div className="list">
      <div className="listTextDiv">
        <input
          type="checkbox"
          onChange={() => handleCheck(toDo.id)}
          checked={toDo.checked}
          id="listInput"
        />
        <Link to={`React_JS-todos-app/todo/${toDo.id}`}>
          <spam
            style={toDo.checked ? { textDecoration: "line-through" } : null}
            className="listText"
          >
            {toDo.name.length < 20 ? toDo.name : `${toDo.name.slice(0, 15)}...`}
          </spam>
          <label className="listArrow">
            <FaAngleDoubleRight
              role="button"
              aria-label={`more information about ${toDo.name}`}
              className="arrow"
            />
          </label>
        </Link>
      </div>
      <div className="listBtns">
        <FaHeart
          role="button"
          title="add to Favorite"
          id={toDo.id}
          onClick={() => addToFavorite(toDo.id)}
          className="heartIcon"
        />
        <Link to={`React_JS-todos-app/edit/${toDo.id}`} >
          <FaEdit
            role="button"
            title="Edit"
            aria-label={`Edit ${toDo.name}`}
            className="editIcon"
          />
        </Link>
          <FaTrashAlt
            role="button"
            title="Delete"
            onClick={() => handleDelete(toDo.id)}
            aria-label={`Delete ${toDo.name}`}
            className="trashIcon"
          />
      </div>
    </div>
  );
};

export default List;
