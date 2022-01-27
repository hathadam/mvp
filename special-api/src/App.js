import React from "react";
import SpotifyApp from "./components/spotify/SpotifyApp";
import Search from "./components/wikiSearch/Search";
import Translate from "./components/translate/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import ImageApp from "./components/imageSearch/ImageApp";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <SpotifyApp/>
      </Route>
      <Route path="/wikiSearch">
        <Search />
      </Route>
      <Route path="/imageSearch">
        <ImageApp />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
