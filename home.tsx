import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MovieRow from "@/components/movie-row";
import AIInput from "@/components/ai-input";
import suitsPoster from "@assets/suits_1771033459275.webp";

// Mock Data
const trendingMovies = [
  { id: 1, title: "Inception", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop", rating: 8.8, year: 2010, match: 95 },
  { id: 2, title: "Interstellar", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop", rating: 8.6, year: 2014, match: 92 },
  { id: 3, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=2070&auto=format&fit=crop", rating: 9.0, year: 2008, match: 98 },
  { id: 4, title: "Blade Runner 2049", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop", rating: 8.0, year: 2017, match: 88 },
  { id: 5, title: "Dune", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop", rating: 8.0, year: 2021, match: 91 },
];

const seriesForYou = [
  { id: 101, title: "Succession", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", rating: 8.8, year: 2018, match: 99 },
  { id: 102, title: "Billions", image: "https://images.unsplash.com/photo-1612532275214-e497175298f4?q=80&w=2070&auto=format&fit=crop", rating: 8.4, year: 2016, match: 94 },
  { id: 103, title: "Mad Men", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop", rating: 8.7, year: 2007, match: 90 },
  { id: 104, title: "House of Cards", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop", rating: 8.7, year: 2013, match: 85 },
  { id: 105, title: "Industry", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", rating: 7.2, year: 2020, match: 82 },
];

const aiPicks = [
  { id: 201, title: "The Social Network", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", rating: 7.8, year: 2010, match: 97 },
  { id: 202, title: "Moneyball", image: "https://images.unsplash.com/photo-1518134558067-135cd4340b55?q=80&w=1961&auto=format&fit=crop", rating: 7.6, year: 2011, match: 93 },
  { id: 203, title: "Margin Call", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop", rating: 7.1, year: 2011, match: 89 },
  { id: 204, title: "The Big Short", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop", rating: 7.8, year: 2015, match: 96 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      
      <Hero 
        image={suitsPoster}
        title="SUITS"
        description="On the run from a drug deal gone bad, Mike Ross, a brilliant college dropout, finds himself working with Harvey Specter, one of New York City's best lawyers."
        rating="8.5"
        year="2011"
        genre={["Drama", "Legal", "Comedy"]}
      />

      <AIInput />

      <div className="mt-12 space-y-8">
        <MovieRow title="Because you watched Suits" movies={seriesForYou} isLarge />
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="AI Recommended for You" movies={aiPicks} />
      </div>

      <footer className="mt-20 border-t border-border/40 py-12 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <span className="font-display text-2xl tracking-wide text-foreground">
                CINEMIND<span className="text-primary">.AI</span>
              </span>
              <p className="text-muted-foreground text-sm mt-2 max-w-md">
                Personalized movie recommendations powered by artificial intelligence. 
                Find your next obsession.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/20">
            © 2024 CineMind AI. All rights reserved. Mockup for demonstration.
          </div>
        </div>
      </footer>
    </div>
  );
}
