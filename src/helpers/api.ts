import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export const fetchStory = async (slug: string = "home") => {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();

  if (process.env.NODE_ENV === "development") {
    return storyblokApi.get(`cdn/stories/${slug}/`, sbParams, { cache: "no-store" });
  }

  return storyblokApi.get(`cdn/stories/${slug}/`, sbParams);
  
}

export const fetchLink = async () => {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();

  if (process.env.NODE_ENV === "development") {
    return storyblokApi.get(`cdn/links/`, sbParams, { cache: "no-store" });
  }

  return storyblokApi.get(`cdn/links/`, sbParams);
}