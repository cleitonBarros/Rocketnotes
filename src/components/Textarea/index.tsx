import * as S from "./styled";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}
export function Textarea({ value, ...props }: TextareaProps) {
  return <S.Container {...props}>{value}</S.Container>;
}
