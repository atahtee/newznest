import axios from 'axios';
import { selectFields } from '../utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyID: number) => {
  const res = await axios.get(`${storyUrl + storyID}.json`);
  return selectFields(res.data);
};

export const getStoryIds = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
