import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}