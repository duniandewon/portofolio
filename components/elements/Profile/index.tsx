import { Container, Name, ProfilePicture } from "./styles";
import Image from "next/image";
import Position from "./styles/Position";
import Socials from "./Socials";

const Profile = () => {
  return (
    <Container>
      <ProfilePicture>
        <Image
          src="/images/profile.jpg"
          layout="intrinsic"
          width={160}
          height={160}
        />
      </ProfilePicture>
      <Name>Mohammad Baragbah</Name>
      <Position>Frontend Developer</Position>
      <Socials />
    </Container>
  );
};

export default Profile;
