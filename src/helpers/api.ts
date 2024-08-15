import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export async function fetchStory(slug: string = "home") {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  
  return storyblokApi.get(`cdn/stories/${slug}/`, sbParams);
}

export async function fetchLinks() {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/links/`, sbParams);
}