import StoryblokStory from "@storyblok/react/story";

import { fetchStory } from "@/helpers/api";
import Layout from "@/components/Layout";

const Home = async () => {
  const { data } = await fetchStory();

  return (
    <Layout>
      <StoryblokStory story={data.story} />
    </Layout>
  );
}

export default Home;
