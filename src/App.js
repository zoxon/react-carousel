import React from "react";
import RouterView from "components/RouterView";
import routes from "./routes";

function App() {
  return (
    <div className="app">
      <RouterView routes={routes} pathname={window.location.pathname} />
    </div>
  );
}

export default App;
