import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from "./components/search-box/search-box.component.js";
// import data from "./external/monsters.js";
import data from "./external/weapons.json";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);

  /*useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);*/

  /* monsters.js
  useEffect(() => {
    setMonsters(data);
  }, []);*/

  useEffect(() => {
    setMonsters(data.map((user) => user));
  }, []);

  // Otherwise the filteredMonsters get's refiltered whenever an event is triggerd, not only when monsters or searchField change.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldStr = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldStr);
  };

  return (
    <div className="App">
      <h1 className="app-title">Metin2 Dex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search monster"}
        className={"monsters-search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
