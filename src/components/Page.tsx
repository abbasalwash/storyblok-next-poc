import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { FeatureStoryblok, GridStoryblok, PageStoryblok, TeaserStoryblok } from "../../component-types-sb";

const Page = ({ blok }: PageStoryblok) => (
  <main {...storyblokEditable(blok)} className="col">
    {blok.body.map((nestedBlok: TeaserStoryblok | GridStoryblok | FeatureStoryblok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;