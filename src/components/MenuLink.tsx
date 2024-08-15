import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

import { MenuLinkStoryblok } from "../../component-types-sb";

const MenuLink = ({ blok }: { blok: MenuLinkStoryblok }) => {

    const url = blok.link?.cached_url;

    return (
        url ? (
            <Link className="text-base font-medium text-gray-500 hover:text-gray-900" href={url} {...storyblokEditable(blok)}>
                {blok.name}
            </Link>
        ) : null
    );
}

export default MenuLink;