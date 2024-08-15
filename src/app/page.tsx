import StoryblokStory from "@storyblok/react/story";

import { fetchStory } from "@/helpers/api";
import Layout from "@/components/Layout";

const Home = async () => {
  const { data: storyData } = await fetchStory(); 

  return (
    <Layout>
      <StoryblokStory story={storyData.story} />
    </Layout>
  );
}

export default Home;
