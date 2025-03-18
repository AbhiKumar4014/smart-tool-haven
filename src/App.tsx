
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TrendingToolsPage from "./pages/TrendingTools";
import FeaturedToolsPage from "./pages/FeaturedTools";
import CategoriesPage from "./pages/Categories";
import CategoryToolsPage from "./pages/CategoryTools";
import ToolDetailPage from "./pages/ToolDetail";

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
          <Route path="/trending" element={<TrendingToolsPage />} />
          <Route path="/featured" element={<FeaturedToolsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:id" element={<CategoryToolsPage />} />
          <Route path="/tool/:id" element={<ToolDetailPage />} />
          
          {/* Routes to be implemented later */}
          <Route path="/new-releases" element={<Index />} />
          <Route path="/compare" element={<Index />} />
          <Route path="/search" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
