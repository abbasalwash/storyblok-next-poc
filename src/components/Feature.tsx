import { storyblokEditable } from "@storyblok/react/rsc";

import { FeatureStoryblok } from "../../component-types-sb";
 
const Feature = ({ blok }: FeatureStoryblok) => (
  <div  {...storyblokEditable(blok)} className="col text-center">
    {blok.name}
  </div>
);
 
export default Feature;