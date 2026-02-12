import TabButton from "./TabButton";

import instaSvg from '../assets/Instagram_Glyph_White.svg';

export default function Header({ setActiveTab, activeTab }) {

    return (

        <header>
            <ul className="tabs">
                <TabButton onClick={() => setActiveTab("home")} isSelected={activeTab === "home"}>
                    Home
                </TabButton>
                <TabButton onClick={() => setActiveTab("about")} isSelected={activeTab === "about"}>
                    About
                </TabButton>
                <TabButton onClick={() => setActiveTab("media")} isSelected={activeTab === "media"}>
                    Media
                </TabButton>
                <TabButton onClick={() => setActiveTab("photos")} isSelected={activeTab === "photos"}>
                    Photos
                </TabButton>
                <TabButton onClick={() => setActiveTab("contact")} isSelected={activeTab === "contact"}>
                    Contact
                </TabButton>
            </ul>
            <a id="insta" href="https://www.instagram.com/bjarnhallprytz/" target="_blank">
                <img src={instaSvg} alt="Instagram" width="60" height="60" />
            </a>
        </header>
    );
}