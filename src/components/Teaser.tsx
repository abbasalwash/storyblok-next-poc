import { storyblokEditable } from "@storyblok/react/rsc";

import { TeaserStoryblok } from "../../component-types-sb";
 
const Teaser = ({ blok }: TeaserStoryblok) => {
  return <h1 {...storyblokEditable(blok)} className="display-6 text-center">{blok.headline}</h1>;
};
 
export default Teaser;