import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <CssBaseline />
      <Navbar />
      <SideBar />
      <MainContent />
    </Wrapper>
  );
}

export default App;
