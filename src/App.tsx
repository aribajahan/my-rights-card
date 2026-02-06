import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import PrepareCard from "./pages/PrepareCard";
import ReviewRights from "./pages/ReviewRights";
import UniversalRights from "./pages/rights/UniversalRights";
import IceAtDoor from "./pages/rights/IceAtDoor";
import StoppedCar from "./pages/rights/StoppedCar";
import StoppedStreet from "./pages/rights/StoppedStreet";
import IceWorkplace from "./pages/rights/IceWorkplace";
import Warrants from "./pages/rights/Warrants";
import WhatToCarry from "./pages/rights/WhatToCarry";
import Hotlines from "./pages/rights/Hotlines";
import ReportRecord from "./pages/rights/ReportRecord";
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
