import * as S from "./styled";

import { Plus, X } from "@phosphor-icons/react";

interface NoteItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
}
export function NoteItem({
  isNew = false,
  value,
  onClick,
  ...props
}: NoteItemProps) {
  return (
    <S.Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...props} />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <Plus /> : <X />}
      </button>
    </S.Container>
  );
}
