import { Dispatch, SetStateAction } from 'react';
import { STORY_INCREMENT } from '../constants';
import Story from './Story';
import styled from 'styled-components';

type StoryListProps = {
  ids: number[];
  setCount: Dispatch<SetStateAction<number>>;
};

const MoreButton = styled.button`
  margin-block: 2em;
  padding: 0.3em 1em;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  cursor: pointer;
`;

export default function StoryList({ ids, setCount }: StoryListProps) {
  return (
    <>
      <section>
        {ids.map((id: number) => (
          <Story key={id} id={id} />
        ))}
        <MoreButton onClick={() => setCount((p) => p + STORY_INCREMENT)}>
          More..
        </MoreButton>
      </section>
    </>
  );
}
