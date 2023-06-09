import * as S from "./styled";

interface TagProps {
  title: string;
}
export function Tag({ title }: TagProps) {
  return <S.Container>{title}</S.Container>;
}
