import React, { useState } from "react";
import Search from "./search/Search.jsx";
import Translate from "./translate/Translate.jsx";
// import Dropdown from "./translate/Dropdown.jsx";
import Route from "./Route.jsx";
import Header from "./Header.jsx";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/list">
        <Search />
      </Route>
      {/* <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route> */}
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
