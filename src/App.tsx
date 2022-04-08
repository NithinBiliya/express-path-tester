import React, { useEffect, useState } from "react";
import { pathToRegexp } from "path-to-regexp";
import "./App.css";

const options = {};

function App() {
  const [isMatch, setIsMatch] = useState(false);
  const [regularExp, setRegularExp] = useState("");
  const [route, setRoute] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setIsMatch(testMatch(route, path));
  }, [route, path]);

  const testMatch = (r: string, p: string) => {
    let regex = pathToRegexp(r, undefined, options);
    setRegularExp(regex.toString());
    return regex.test(p);
  };

  return (
    <div className="App">
      <section>
        Route -
        <input
          type="text"
          onChange={(e) => {
            setRoute(e.target.value);
          }}
        />
        {route}
      </section>
      <section>
        Path -
        <input
          type="text"
          onChange={(e) => {
            setPath(e.target.value);
          }}
        />
        {path}
      </section>
      <section>regex - {regularExp}</section>
      <section>Match - {JSON.stringify(isMatch)}</section>
    </div>
  );
}

export default App;
