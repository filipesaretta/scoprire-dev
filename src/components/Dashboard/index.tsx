import { Header } from "../Header";
import { UserCard } from "../UserCard";
import { UserSearch } from "../UserSearch";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <UserSearch />
      <UserCard />
    </Container>
  )
}