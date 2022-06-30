import {ThemeProvider} from "styled-components"
import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./components/styled/Global.styled";
import Routes from "./Routes";


const theme =  {
background: "black"
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar></NavBar>
      <Routes></Routes>
    </ThemeProvider>
  );
}

export default App;
