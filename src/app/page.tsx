// src/app/page.tsx
import StoryblokStory from "@storyblok/react/story";
import { fetchData } from "./api";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="container">
      <StoryblokStory story={data.story} />
    </div>
  );
}