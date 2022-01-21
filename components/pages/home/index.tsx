import Link from "next/link";

import {
  Container,
  Hi,
  Job,
  MyPic,
  Name,
  Title,
  WorksContainer,
  WorksItem,
  WorksList,
  WorksTop,
} from "./styles";

const Home = () => {
  const _renderProjectList = () => {
    return (
      <WorksContainer>
        <WorksTop>
          <p>My Works</p>
          <Link href="/my-works">
            <a>View all</a>
          </Link>
        </WorksTop>
        <WorksList>
          <WorksItem />
          <WorksItem />
          <WorksItem />
          <WorksItem />
        </WorksList>
      </WorksContainer>
    );
  };

  const _renderTitle = () => {
    return (
      <Title>
        <div>
          <Hi>Hi there,</Hi>
          <Name>
            I am <span>Abolfaz</span>
          </Name>
          <Job>I do coding during the day</Job>
        </div>
      </Title>
    );
  };

  return (
    <Container>
      {_renderTitle()}
      {_renderProjectList()}
      <MyPic src="/images/mypic.svg" alt="mypic" />
    </Container>
  );
};

export default Home;
