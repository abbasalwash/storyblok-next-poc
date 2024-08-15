import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export const fetchStory = async (slug: string = "home") => {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  
  return storyblokApi.get(`cdn/stories/${slug}/`, sbParams);
}

export const fetchLink = async () => {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/links/`, sbParams);
}