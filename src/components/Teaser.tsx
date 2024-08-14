import { storyblokEditable } from "@storyblok/react/rsc";

import { TeaserStoryblok } from "../../component-types-sb";
 
const Teaser = ({ blok }: TeaserStoryblok) => {
  return <h2 {...storyblokEditable(blok)} className="text-2xl mb-10">{blok.headline}</h2>;
};
 
export default Teaser;