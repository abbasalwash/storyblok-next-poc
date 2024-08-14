"use client";
import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
 
storyblokInit({
  accessToken: "your_preview_token",
  use: [apiPlugin],
  components
});
 

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return children;
}