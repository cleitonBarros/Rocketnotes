import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styled";
import { Background } from "./styled";

import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";

export function SignIn() {
  return (
    <S.Container>
      <S.Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencias links uteis</p>

        <h2>Faça seu login</h2>
        <Input placeholder="Email" type="text" icon={<EnvelopeSimple />} />
        <Input placeholder="Email" type="text" icon={<LockSimple />} />
        <Button type="submit" title="Entrar" />
        <Link to="/register">Criar conta</Link>
      </S.Form>
      <Background />
    </S.Container>
  );
}
