import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { STORY_INCREMENT } from '../constants';
import { getStoryIds, topStoriesUrl } from '../services/hnApi';
import StoryList from './StoryList';

const TopStories = () => {
  const [count, setCount] = useState(STORY_INCREMENT);
  const {
    data: storyIds,
    isLoading,
    isError,
  } = useQuery(['topstories'], () => getStoryIds(topStoriesUrl), {
    select: (data) => data.slice(0, count),
  });
  if (isLoading) {
    return <div>Loading kiasi...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <StoryList ids={storyIds} setCount={setCount} />;
};

export default TopStories;
