import Wrapper from "../components/layout/Wrapper";
import Profile from "../components/elements/Profile";
import About from "../components/elements/About";
import { Page } from "../components/layout/Wrapper/styles";

const HomePage = () => {
  return (
    <Wrapper>
      <Page>
        <Profile />
      </Page>
      <Page right>
        <About />
      </Page>
    </Wrapper>
  );
};

export default HomePage;
