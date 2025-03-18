
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trending" element={<Index />} /> {/* Will implement later */}
          <Route path="/featured" element={<Index />} /> {/* Will implement later */}
          <Route path="/new-releases" element={<Index />} /> {/* Will implement later */}
          <Route path="/compare" element={<Index />} /> {/* Will implement later */}
          <Route path="/search" element={<Index />} /> {/* Will implement later */}
          <Route path="/tool/:id" element={<Index />} /> {/* Will implement later */}
          <Route path="/category/:id" element={<Index />} /> {/* Will implement later */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
