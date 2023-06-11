import { Tag } from "../Tags";
import * as S from "./styled";

interface NoteProps {
  data: { title: string; tags: Array<{ id: string; name: string }> };
}

export function Note({ data, ...props }: NoteProps) {
  const { title, tags } = data;
  return (
    <S.Container {...props}>
      <h1>{title}</h1>
      {tags && (
        <footer>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </S.Container>
  );
}
