import styled from "styled-components";

const ProfilePicture = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  position: absolute;
  left: 50%;
  top: -8rem;
  transform: translateX(-50%);

  img {
    border-radius: 50%;
  }
`;

export default ProfilePicture;
