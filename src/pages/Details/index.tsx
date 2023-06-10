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
      <main>
        <S.Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            eslint-disable-next-line react/no-unescaped-entities industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

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
        </S.Content>
      </main>
    </S.Container>
  );
}
