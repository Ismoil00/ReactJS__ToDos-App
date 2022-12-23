import React from "react";
import List from "./List";

const Home = ({ toDos, handleDelete, handleCheck, addToFavorite }) => {
  return (
    <main className="mainSec">
      {toDos.length ? (
        toDos.map((toDo) => (
          <List
            key={toDo.id}
            toDo={toDo}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            addToFavorite={addToFavorite}
          />
        ))
      ) : (
        <p className="emptyList">The List is Empty</p>
      )}
    </main>
  );
};

export default Home;
