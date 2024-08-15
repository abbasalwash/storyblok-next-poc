import StoryblokStory from "@storyblok/react/story";

import { fetchLink, fetchStory } from "@/helpers/api";
import Layout from "@/components/Layout";

const Page = async ({ params }: { params: { slug: string } }) => {
  let { data } = await fetchStory(params.slug);

  return (
    <Layout>
      <StoryblokStory story={data.story} bridgeOptions={{}} />
    </Layout>
  );
}

export const generateStaticParams = async () => {
  let { data } = await fetchLink();
  let paths: { slug: string }[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
    if (slug === "home") {
      return;
    }
    paths.push({ slug });
  });

  return paths;
}

export default Page;