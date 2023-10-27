import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { STORY_INCREMENT } from '../constants';
import { getStoryIds, newStoriesUrl } from '../services/hnApi';
import StoryList from './StoryList';

const LatestStories = () => {
  const [count, setCount] = useState(STORY_INCREMENT);
  const {
    data: storyIds,
    isLoading,
    isError,
  } = useQuery(['lateststories'], () => getStoryIds(newStoriesUrl), {
    select: (data) => data.slice(0, count),
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <StoryList ids={storyIds} setCount={setCount} />;
};

export default LatestStories;
