import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

import Wrapper from "./components/Wrapper";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

function App() {
  return (
    <Wrapper>
      <CssBaseline />
      <SideBar />
      <Navbar />
      <MainContent />
    </Wrapper>
  );
}

export default App;
