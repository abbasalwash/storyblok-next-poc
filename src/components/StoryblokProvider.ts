"use client";

import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import HeaderMenu from "@/components/HeaderMenu";
import MenuLink from "@/components/MenuLink";
import Config from "@/components/Config";
import Hero from "./Hero";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  hero: Hero,
  'header_menu': HeaderMenu,
  'menu_link': MenuLink
};
 
storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components
});
 
export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return children;
}