import React from "react";
import { TextField, Radio } from "./components";

function App() {
  return (
    <div>
      <h1>Title</h1>
      <TextField legend="Тестовый инпут" placeholder="Doe" />
      <TextField legend="Repeat password" type="password" />
      <Radio
        label="Tip recipient"
        id="tipRecipient"
        name="accountType"
        tabIndex={0}
      />
      <Radio
        label="Administrator"
        id="administrator"
        name="accountType"
        tabIndex={0}
      />
    </div>
  );
}

export default App;
