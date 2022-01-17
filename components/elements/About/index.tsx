import Title from "../Title";
import Info from "./Info";
import { AboutMe, Container, Infos } from "./styles";

const About = () => {
  return (
    <Container>
      <Title title="About Me" />
      <AboutMe>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam
        molestias accusamus voluptates, tempora beatae alias sed delectus
        repellendus minima.
      </AboutMe>
      <Infos>
        <Info title="age" detail={29} />
        <Info title="Residence" detail="Indonesia" />
        <Info title="address" detail="Jakarta, Indonesia" />
        <Info title="freelance" detail="available" />
      </Infos>
    </Container>
  );
};

export default About;
