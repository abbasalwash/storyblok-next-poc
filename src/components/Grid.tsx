import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { FeatureStoryblok, GridStoryblok } from "../../component-types-sb";
 
const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div  {...storyblokEditable(blok)} className="row">
      {blok.columns.map((nestedBlok: FeatureStoryblok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;