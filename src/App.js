// components
import Home from "./pages/Home";

// context
import { ThemeContextProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
