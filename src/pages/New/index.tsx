import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
        </S.Form>
      </main>
    </S.Container>
  );
}
