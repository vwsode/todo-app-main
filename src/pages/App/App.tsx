import React, { FC } from "react";
import { ThemeProvider } from "../../providers/ThemeProvider";

import TodoApp from "../TodoApp";

const App: FC = () => {
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
};

export default App;
