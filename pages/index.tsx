import Wrapper from "../components/layout/Wrapper";
import Profile from '../components/elements/Profile'

import { Page } from "../components/layout/Wrapper/styles";

const HomePage = () => {
  const _renderRightPage = () => <h2>Left Page</h2>;

  return (
    <Wrapper>
      <Page><Profile /></Page>
      <Page right>{_renderRightPage()}</Page>
    </Wrapper>
  );
};

export default HomePage;
