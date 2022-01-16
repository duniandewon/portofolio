import { Container, Text } from "./styles";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default Title;
