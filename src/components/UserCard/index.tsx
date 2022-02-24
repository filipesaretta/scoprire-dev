import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar, Container, Details } from "./styles";
import avatar from '../../assets/me2.jpg';

interface userProps {
  name: string;
  avatar_url: string;
  location: string;
  created_at: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

export function UserCard() {
  // const [user, setUser] = useState<userProps>({} as userProps);

  // useEffect(() => {
  //   axios.get('https://api.github.com/users/filipesaretta').then(
  //     (response) => setUser(response.data)
  //   )
  // }, []);
  // console.log(user.avatar_url);

  return (
    <Container>
      <Avatar src={avatar} alt='{user.name}' />
      <Details>
        <h3>Filipe Saretta</h3>
        <p> Joined at {' '}
          15/02/2023
        </p>
      </Details>

    </Container>
  )
}     