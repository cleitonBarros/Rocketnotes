import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";

import * as S from "./styled";

export function NewNote() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observaçoes" />
          <Section title="Links uteis">
            <NoteItem value="http://rocketseat.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </S.Form>
      </main>
    </S.Container>
  );
}
