
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
import NewReleasesPage from "./pages/NewReleases";
import ComparePage from "./pages/Compare";
import SearchPage from "./pages/Search";

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
          <Route path="/new-releases" element={<NewReleasesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/search" element={<SearchPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
