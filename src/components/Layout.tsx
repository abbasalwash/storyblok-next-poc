import Footer from "./Footer";
import Config from "./Config";
import { fetchStory } from "@/helpers/api";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const { data } = await fetchStory('config');
    
    return (
        <div>
            <Config blok={data.story.content} />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;