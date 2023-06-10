import { ButtonText } from "../../components/ButonText";
import { Header } from "../../components/Header";

import * as S from "./styled";

export function Home() {
  return (
    <S.Container>
      <S.Brand>
        <h1>RocketNotes</h1>
      </S.Brand>
      <Header></Header>
      <S.Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJS" />
        </li>
      </S.Menu>
      <S.Search></S.Search>
      <S.Content></S.Content>
      <S.NewNotes></S.NewNotes>
    </S.Container>
  );
}
