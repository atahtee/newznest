import { useQuery } from '@tanstack/react-query';
import { getStory } from '../services/hnApi';
import styled from 'styled-components';
import { mapTime } from '../utils/time-mapper';

const StoryWrapper = styled.article`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:hover {
    transform: translateX(5px);
    transition: transform 0.1s ease-in-out;
  }
`;

const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #3589ff;
    text-decoration: none;
  }
`;

const StoryDetails = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
  }

  > span:last-child:before {
    content: '🕛️';
    margin: 0 7px;
  }
`;

const StoryMetaElement = styled.span`
  font-weight: bold;
`;

const LoadingDiv = styled.div`
  padding-block: 1em;
`;

export default function Story({ id }: { id: number }) {
  const {
    data: story,
    isLoading,
    isError,
  } = useQuery(['story', id], () => getStory(id), {
    // select: (data) => data.url !== undefined,
  });

  if (isLoading) {
    return <LoadingDiv>loading..</LoadingDiv>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <StoryWrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryDetails>
        <span>
          <StoryMetaElement>By:</StoryMetaElement> {story.by}
        </span>
        <span>{mapTime(story.time)}</span>
      </StoryDetails>
    </StoryWrapper>
  );
}
