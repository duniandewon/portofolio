import { InfoContainer, InfoDetail, InfoTitle } from "./styles";

interface Props {
  title: string;
  detail: string | number;
}

const Info = ({ title, detail }: Props) => {
  return (
    <InfoContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoDetail>{detail}</InfoDetail>
    </InfoContainer>
  );
};

export default Info;
