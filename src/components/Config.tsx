import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

import { ConfigStoryblok } from "../../component-types-sb";
import HeaderMenu from "./HeaderMenu";

const Config = ({ blok }: { blok: ConfigStoryblok }) => {

  const renderHeaderMenu = () => {
    if (blok.header_menu) {

      return <HeaderMenu blok={blok.header_menu} />;

      // return blok.header_menu.map((nestedBlok) => (        
      //   <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      // ));
    }

    return null;
  };

  return (
    <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="h-20 w-auto sm:h-10">
                <Image
                  src='https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png'
                  alt="Storyblok"
                  width={251}
                  height={53}
                />
              </div>
            </Link>
          </div>
          {renderHeaderMenu()}
        </div>
      </div>
    </div>
  );
};

export default Config;