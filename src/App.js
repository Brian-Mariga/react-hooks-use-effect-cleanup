import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock((showClock) => !showClock)}>
        Toggle Clock
      </button>
    </div>
  );
}

export default App;
