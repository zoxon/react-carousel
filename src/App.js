import React from "react";

import RouterView from "components/RouterView";
import { PUBLIC_PATH } from "./constants";
import routes from "./routes";

function App() {
  return (
    <div className="app">
      <RouterView
        routes={routes}
        pathname={window.location.pathname}
        basename={PUBLIC_PATH}
      />
    </div>
  );
}

export default App;
