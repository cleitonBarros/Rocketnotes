import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styled";

import {
  ArrowLeft,
  EnvelopeSimple,
  LockSimple,
  User,
  Camera
} from "@phosphor-icons/react";

export function Profile() {
  return (
    <S.Container>
      <header>
        <a href="/">
          <ArrowLeft />
        </a>
      </header>
      <S.Form>
        <S.Avatar>
          <img
            src="https://github.com/cleitonBarros.png"
            alt="Foto do usuario"
          />
          <label htmlFor="avatar">
            <Camera />
            <input id="avatar" type="file" />
          </label>
        </S.Avatar>
        <Input placeholder="Nome" type="text" icon={<User />} />
        <Input placeholder="E-mail" type="text" icon={<EnvelopeSimple />} />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={<LockSimple />}
        />
        <Input placeholder="Nova Senha" type="password" icon={<LockSimple />} />
        <Button title="Salvar" />
      </S.Form>
    </S.Container>
  );
}
