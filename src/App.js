import BestSellingFlavour from "./components/BestSellingFlavour";
import BookBanner from "./components/BookBanner";
import BookSection from "./components/BookSection";
import CakeSection from "./components/CakeSection";
import CelebrationSection from "./components/CelebrationSection";
import HeroSection from "./components/HeroSection";
import OfferSection from "./components/OfferSection";
import PastriesSection from "./components/PastriesSection";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="bg-black">
            <Sidebar />
            <HeroSection/>
            <OfferSection/>
            <CakeSection/>
            <PastriesSection/>
            <CelebrationSection/>
            <BestSellingFlavour/>
            <BookBanner/>
            <BookSection/>
        </div>
    );
}

export default App;
