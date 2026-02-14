import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MoviesPage from "@/pages/movies";
import TVPage from "@/pages/tv";
import MyListPage from "@/pages/my-list";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/tv" component={TVPage} />
      <Route path="/list" component={MyListPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
