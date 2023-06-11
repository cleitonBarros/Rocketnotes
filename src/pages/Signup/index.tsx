import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styled";
import { Background } from "./styled";

import { EnvelopeSimple, LockSimple, User } from "@phosphor-icons/react";

export function SignUp() {
  return (
    <S.Container>
      <Background />
      <S.Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencias links uteis</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={<User />} />
        <Input placeholder="E-mail" type="text" icon={<EnvelopeSimple />} />
        <Input placeholder="Senha" type="text" icon={<LockSimple />} />

        <Button type="submit" title="Cadastrar" />
        <a href="#">Voltar para o login</a>
      </S.Form>
    </S.Container>
  );
}
