import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from "./components/search-box/search-box.component.js";
import data from "./external/weapons.json";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [weapons, setWeapons] = useState([]);
  const [filteredWeapons, setFilteredWeapons] = useState(weapons);

  useEffect(() => {
    setWeapons(data.map((user) => user));
  }, []);

  // Otherwise the filteredWeapons get's refiltered whenever an event is triggerd, not only when weapons or searchField change.
  useEffect(() => {
    const newFilteredWeapons = weapons.filter((weapon) => {
      return weapon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredWeapons(newFilteredWeapons);
  }, [weapons, searchField]);

  const onSearchChange = (event) => {
    const searchFieldStr = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldStr);
  };

  return (
    <div className="App">
      <h1 className="app-title">Metin2 Dex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search weapons"}
        className={"weapons-search-box"}
      />
      <CardList weapons={filteredWeapons} />
    </div>
  );
};

export default App;
