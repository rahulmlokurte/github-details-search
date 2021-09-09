import { createTheme } from "@material-ui/core";
import { green, pink } from "@material-ui/core/colors";
import "./App.css";
import Layout from "./components/layouts/Layout";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[500],
      },
      secondary: green,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
