import * as S from "./styled";

interface TagProps {
  title: string;
}
export function Tag({ title, ...rest }: TagProps) {
  return <S.Container {...rest}>{title}</S.Container>;
}
