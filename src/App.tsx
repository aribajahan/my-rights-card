import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import PrepareCard from "./pages/PrepareCard";
import ReviewRights from "./pages/ReviewRights";
import HelpCommunity from "./pages/HelpCommunity";
import StayReadyTips from "./pages/StayReadyTips";
import Hotlines from "./pages/Hotlines";
import About from "./pages/About";

// Rights pages
import UniversalRights from "./pages/rights/UniversalRights";
import IceAtDoor from "./pages/rights/IceAtDoor";
import StoppedCar from "./pages/rights/StoppedCar";
import StoppedStreet from "./pages/rights/StoppedStreet";
import IceWorkplace from "./pages/rights/IceWorkplace";
import AtCheckpoint from "./pages/rights/AtCheckpoint";
import IfDetained from "./pages/rights/IfDetained";
import Warrants from "./pages/rights/Warrants";
import RecordingReporting from "./pages/rights/RecordingReporting";

// Community pages
import MakeCardForSomeone from "./pages/community/MakeCardForSomeone";
import SetUpTheirPhone from "./pages/community/SetUpTheirPhone";
import WitnessEncounter from "./pages/community/WitnessEncounter";
import SomeoneDetained from "./pages/community/SomeoneDetained";
import PrepareFamily from "./pages/community/PrepareFamily";
import ShareSafely from "./pages/community/ShareSafely";

// Tips pages
import LockScreen from "./pages/tips/LockScreen";
import EmergencyContacts from "./pages/tips/EmergencyContacts";
import MemorizeNumber from "./pages/tips/MemorizeNumber";
import EmergencyText from "./pages/tips/EmergencyText";
import PracticeRights from "./pages/tips/PracticeRights";
import OneTapAudio from "./pages/tips/OneTapAudio";
import LocationSharing from "./pages/tips/LocationSharing";
import PrivacySettings from "./pages/tips/PrivacySettings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prepare" element={<PrepareCard />} />
            <Route path="/hotlines" element={<Hotlines />} />
            <Route path="/about" element={<About />} />
            
            {/* Rights */}
            <Route path="/rights" element={<ReviewRights />} />
            <Route path="/rights/universal" element={<UniversalRights />} />
            <Route path="/rights/door" element={<IceAtDoor />} />
            <Route path="/rights/car" element={<StoppedCar />} />
            <Route path="/rights/street" element={<StoppedStreet />} />
            <Route path="/rights/workplace" element={<IceWorkplace />} />
            <Route path="/rights/checkpoint" element={<AtCheckpoint />} />
            <Route path="/rights/detained" element={<IfDetained />} />
            <Route path="/rights/warrants" element={<Warrants />} />
            <Route path="/rights/recording" element={<RecordingReporting />} />
            
            {/* Community */}
            <Route path="/community" element={<HelpCommunity />} />
            <Route path="/community/make-card" element={<MakeCardForSomeone />} />
            <Route path="/community/setup-phone" element={<SetUpTheirPhone />} />
            <Route path="/community/witness" element={<WitnessEncounter />} />
            <Route path="/community/detained" element={<SomeoneDetained />} />
            <Route path="/community/family" element={<PrepareFamily />} />
            <Route path="/community/share" element={<ShareSafely />} />
            
            {/* Tips */}
            <Route path="/tips" element={<StayReadyTips />} />
            <Route path="/tips/lock-screen" element={<LockScreen />} />
            <Route path="/tips/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/tips/memorize-number" element={<MemorizeNumber />} />
            <Route path="/tips/emergency-text" element={<EmergencyText />} />
            <Route path="/tips/practice" element={<PracticeRights />} />
            <Route path="/tips/audio" element={<OneTapAudio />} />
            <Route path="/tips/location-sharing" element={<LocationSharing />} />
            <Route path="/tips/privacy" element={<PrivacySettings />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
