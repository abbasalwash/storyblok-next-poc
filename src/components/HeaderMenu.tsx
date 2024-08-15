import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import MenuLink from "./MenuLink";
import { MenuLinkStoryblok } from "../../component-types-sb";

const HeaderMenu = ({ blok }: {blok: MenuLinkStoryblok[]}) => {

    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({ blok })}>
            {blok.map((nestedBlok) => (
                // <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                <MenuLink blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
}

export default HeaderMenu;