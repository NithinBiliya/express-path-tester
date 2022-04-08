import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isMatch, setIsMatch] = useState(false);
  const [route, setPath] = useState("");
  const [path, setRoute] = useState("");

  useEffect(() => {
    setIsMatch(testMatch(route, path));
  }, [route, path]);

  const testMatch = (r: string, p: string) => {
    return r === p;
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
      </section>
      <section>
        Path -
        <input
          type="text"
          onChange={(e) => {
            setPath(e.target.value);
          }}
        />
      </section>
      <section>Match - {JSON.stringify(isMatch)}</section>
    </div>
  );
}

export default App;
