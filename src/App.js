import Header from "./Header";
import Home from "./Home";
import NewToDo from "./NewToDo";
import ToDoPage from "./ToDoPage";
import Edit from "./Edit";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem("toDos")) || []
  );
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editFrequency, setEditFrequency] = useState("");
  const [editStartPoint, setEditStartPoint] = useState("");
  const [editEndPoint, setEditEndPoint] = useState("");
  const [search, setSearch] = useState("");
  const [finalDisplay, setFinalDisplay] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [filter, setFilter] = useState("All");
  const history = useHistory();
  const pageUrl = window.location.pathname;

  //Initial Reset:
  useEffect(() => {
    setTimeout(initialReset, 100);
  }, [finalDisplay, pageUrl]);

  //Initial Reset Function:
  function initialReset() {
    finalDisplay.forEach((each) => {
      const heartIcon = document.getElementById(`${each.id}`);
      if (each.liked && pageUrl === "/") {
        heartIcon.classList.add("heartIconColored");
      } else if (!each.liked && pageUrl === "/"){
        heartIcon.classList.remove("heartIconColored");
      }
    });
  }

  //Saving any changes to LocalStorage whenevery "toDo" - State changes:
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  //Searching "to dos":
  useEffect(() => {
    const searchedToDos = filteredToDos.filter(
      (toDo) =>
        toDo.name.toLowerCase().includes(search.toLowerCase()) ||
        toDo.description.toLowerCase().includes(search.toLowerCase()) ||
        toDo.frequency.toLowerCase().includes(search.toLowerCase())
    );
    setFinalDisplay(searchedToDos);
  }, [filteredToDos, search]);

  //Filtering:
  useEffect(() => {
    if (filter === "All") {
      setFilteredToDos(toDos);
    } else if (filter === "Accomplished") {
      const checkedToDos = toDos.filter((toDo) => toDo.checked === true);
      setFilteredToDos(checkedToDos);
    } else if (filter === "Active") {
      const uncheckedToDos = toDos.filter((toDo) => toDo.checked === false);
      setFilteredToDos(uncheckedToDos);
    } else if (filter === "Favorites") {
      const favoriteToDos = toDos.filter((toDo) => toDo.liked === true);
      setFilteredToDos(favoriteToDos);
    }
  }, [toDos, filter]);

  //Handling deleting to dos:
  const handleDelete = (id) => {
    const undeletedOnes = toDos.filter((each) => each.id !== id);
    setToDos(undeletedOnes);
  };

  //Handling checking to dos:
  const handleCheck = (id) => {
    const checkedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo
    );
    setToDos(checkedToDos);
  };

  //Handling creating new to dos:
  const submitNewToDo = (e) => {
    e.preventDefault();
    const id = toDos.length ? toDos[toDos.length - 1].id + 1 : 1;
    const newToDo = {
      id,
      name: task,
      description: description,
      frequency: frequency,
      checked: false,
      liked: false,
      startPoint: startPoint,
      endPoint: endPoint,
    };
    const allNewToDos = [...toDos, newToDo];
    setToDos(allNewToDos);
    setTask("");
    setDescription("");
    setFrequency("");
    setStartPoint("");
    setEndPoint("");
    history.push("/");
  };

  // Handling editing existing to dos:
  const submitEditedToDo = (id) => {
    const editedToDo = {
      id,
      name: editTask,
      description: editDescription,
      frequency: editFrequency,
      checked: false,
      startPoint: editStartPoint,
      endPoint: editEndPoint,
    };
    const allEditedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...editedToDo } : toDo
    );
    setToDos(allEditedToDos);
    setEditTask("");
    setEditDescription("");
    setEditFrequency("");
    setEditStartPoint("");
    setEditEndPoint("");
    history.push("/");
  };

  //Handle adding to Favorites:
  const addToFavorite = (id) => {
    const heartIcon = document.querySelectorAll(".heartIcon");
    const likedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, liked: !toDo.liked } : toDo
    );
    setToDos(likedToDos);
    for (let a = 0; a < heartIcon.length; a++) {
      if (heartIcon[a].id === id.toString()) {
        if (!heartIcon[a].classList.contains("heartIconColored")) {
          heartIcon[a].classList.add("heartIconColored");
          return;
        } else {
          heartIcon[a].classList.remove("heartIconColored");
        }
      }
    }
  };

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} setFilter={setFilter} />
      <Switch>
        <Route exact path="/">
          <Home
            toDos={finalDisplay}
            addToFavorite={addToFavorite}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </Route>
        <Route exact path="/todo">
          <NewToDo
            setTask={setTask}
            setDescription={setDescription}
            setFrequency={setFrequency}
            setStartPoint={setStartPoint}
            setEndPoint={setEndPoint}
            submitNewToDo={submitNewToDo}
          />
        </Route>
        <Route path="/todo/:id">
          <ToDoPage
            toDos={toDos}
            handleDelete={handleDelete}
            addToFavorite={addToFavorite}
          />
        </Route>
        <Route path="/edit/:id">
          <Edit
            toDos={toDos}
            editTask={editTask}
            setEditTask={setEditTask}
            editDescription={editDescription}
            setEditDescription={setEditDescription}
            editFrequency={editFrequency}
            setEditFrequency={setEditFrequency}
            editStartPoint={editStartPoint}
            setEditStartPoint={setEditStartPoint}
            editEndPoint={editEndPoint}
            setEditEndPoint={setEditEndPoint}
            submitEditedToDo={submitEditedToDo}
          />
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
      <Footer finalDisplay={finalDisplay} />
    </div>
  );
}

export default App;
