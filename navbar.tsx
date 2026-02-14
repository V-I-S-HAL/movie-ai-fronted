import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Film, Tv, Star, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Series", href: "/tv" },
    { name: "My List", href: "/list" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary h-8 w-8 rounded flex items-center justify-center transform group-hover:rotate-3 transition-transform">
              <Film className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-2xl tracking-wide text-foreground">
              CINEMIND<span className="text-primary">.AI</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ask AI for a recommendation..."
              className="pl-9 bg-secondary/50 border-transparent focus:border-primary/50 focus:bg-secondary/80 rounded-full h-9 text-sm transition-all"
            />
          </div>
          <Button size="icon" variant="ghost" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border/20">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <a
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          location === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-border/20" />
                <Input
                  placeholder="Search movies..."
                  className="bg-secondary/50 border-transparent"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
