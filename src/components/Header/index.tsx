import * as S from "./styled";

import { Power } from "@phosphor-icons/react";

export function Header() {
  return (
    <S.Container>
      <S.Profile to="/profile">
        <img src="https://github.com/cleitonBarros.png" alt="foto do usuario" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Cleiton Barros</strong>
        </div>
      </S.Profile>
      <S.Logout>
        <Power />
      </S.Logout>
    </S.Container>
  );
}
