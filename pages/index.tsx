import Wrapper from "../components/layout/Wrapper";

import { Page } from "../components/layout/Wrapper/styles";

const HomePage = () => {
  const _renderLeftPage = () => <h2>Left Page</h2>;
  const _renderRightPage = () => <h2>Left Page</h2>;

  return (
    <Wrapper>
      <Page>{_renderLeftPage()}</Page>
      <Page right>{_renderRightPage()}</Page>
    </Wrapper>
  );
};

export default HomePage;
