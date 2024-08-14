// src/app/page.tsx
import StoryblokStory from "@storyblok/react/story";

import { fetchData } from "./api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <Navigation />
      <StoryblokStory story={data.story} />
      <Footer />
    </div>
  );
}