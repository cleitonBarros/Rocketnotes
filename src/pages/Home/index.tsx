import { ButtonText } from "../../components/ButonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import * as S from "./styled";

import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

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
      <S.Search>
        <Input icon={<MagnifyingGlass />} placeholder="Pesquise um titulo" />
      </S.Search>
      <S.Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" }
              ]
            }}
          />
        </Section>
      </S.Content>
      <S.NewNotes to="/new">
        <Plus />
        Criar Nota
      </S.NewNotes>
    </S.Container>
  );
}
