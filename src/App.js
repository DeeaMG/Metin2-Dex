import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from "./components/search-box/search-box.component.js";
// import data from "./external/monsters.js";
import data from "./external/monsters.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    /* monsters.js
    this.setState(() => {
      return { monsters: data };
    });
    */

    // monsters.json - ?Says "Compiled with problems", but it takes json correctly from the file.
    this.setState(() => {
      return { monsters: data.map((user) => user) };
    });

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) =>
    //     this.setState(() => {
    //       return { monsters: users };
    //     })
    //   );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

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
  }
}

export default App;
