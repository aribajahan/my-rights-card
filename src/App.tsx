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
import UniversalRights from "./pages/rights/UniversalRights";
import IceAtDoor from "./pages/rights/IceAtDoor";
import StoppedCar from "./pages/rights/StoppedCar";
import StoppedStreet from "./pages/rights/StoppedStreet";
import IceWorkplace from "./pages/rights/IceWorkplace";
import Warrants from "./pages/rights/Warrants";
import WhatToCarry from "./pages/rights/WhatToCarry";
import Hotlines from "./pages/rights/Hotlines";
import ReportRecord from "./pages/rights/ReportRecord";
import StateRights from "./pages/rights/StateRights";
import GoodWitness from "./pages/community/GoodWitness";
import BystanderRights from "./pages/community/BystanderRights";
import SeeArrest from "./pages/community/SeeArrest";
import PrepareFamily from "./pages/community/PrepareFamily";
import RapidResponse from "./pages/community/RapidResponse";
import MutualAid from "./pages/community/MutualAid";
import LockScreen from "./pages/tips/LockScreen";
import AudioShortcut from "./pages/tips/AudioShortcut";
import EmergencyText from "./pages/tips/EmergencyText";
import Recording from "./pages/tips/Recording";
import LocationSharing from "./pages/tips/LocationSharing";
import Trackers from "./pages/tips/Trackers";
import Kids from "./pages/tips/Kids";
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
            <Route path="/rights" element={<ReviewRights />} />
            <Route path="/rights/universal" element={<UniversalRights />} />
            <Route path="/rights/door" element={<IceAtDoor />} />
            <Route path="/rights/car" element={<StoppedCar />} />
            <Route path="/rights/street" element={<StoppedStreet />} />
            <Route path="/rights/workplace" element={<IceWorkplace />} />
            <Route path="/rights/warrants" element={<Warrants />} />
            <Route path="/rights/carry" element={<WhatToCarry />} />
            <Route path="/rights/hotlines" element={<Hotlines />} />
            <Route path="/rights/report" element={<ReportRecord />} />
            <Route path="/rights/state" element={<StateRights />} />
            <Route path="/community" element={<HelpCommunity />} />
            <Route path="/community/witness" element={<GoodWitness />} />
            <Route path="/community/bystander" element={<BystanderRights />} />
            <Route path="/community/arrest" element={<SeeArrest />} />
            <Route path="/community/family" element={<PrepareFamily />} />
            <Route path="/community/rapid-response" element={<RapidResponse />} />
            <Route path="/community/mutual-aid" element={<MutualAid />} />
            <Route path="/tips" element={<StayReadyTips />} />
            <Route path="/tips/lock-screen" element={<LockScreen />} />
            <Route path="/tips/audio-shortcut" element={<AudioShortcut />} />
            <Route path="/tips/emergency-text" element={<EmergencyText />} />
            <Route path="/tips/recording" element={<Recording />} />
            <Route path="/tips/location-sharing" element={<LocationSharing />} />
            <Route path="/tips/trackers" element={<Trackers />} />
            <Route path="/tips/kids" element={<Kids />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
