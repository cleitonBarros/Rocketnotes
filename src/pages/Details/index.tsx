import { ButtonText } from "../../components/ButonText";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/section";
import { Tag } from "../../components/Tags";

import * as S from "./styled";

export default function Details() {
  return (
    <S.Container>
      <Header />

      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <S.Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </S.Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="enviar" />
    </S.Container>
  );
}
