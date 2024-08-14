import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { FeatureStoryblok, GridStoryblok, PageStoryblok, TeaserStoryblok } from "../../component-types-sb";

const Page = ({ blok }: PageStoryblok) => (
    <main {...storyblokEditable(blok)} className="text-center mt-4">
      {blok.body.map((nestedBlok: TeaserStoryblok | GridStoryblok | FeatureStoryblok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
);

export default Page;