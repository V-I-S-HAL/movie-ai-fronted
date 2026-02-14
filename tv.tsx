import Navbar from "@/components/navbar";
import MovieRow from "@/components/movie-row";
import AIInput from "@/components/ai-input";

const shows = [
  { id: 301, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop", rating: 9.5, year: 2008, match: 99 },
  { id: 302, title: "Stranger Things", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop", rating: 8.7, year: 2016, match: 96 },
  { id: 303, title: "The Boys", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=2070&auto=format&fit=crop", rating: 8.7, year: 2019, match: 94 },
  { id: 304, title: "Dark", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop", rating: 8.8, year: 2017, match: 98 },
  { id: 305, title: "The Crown", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop", rating: 8.6, year: 2016, match: 91 },
];

export default function TVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 pt-24">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-display text-5xl md:text-7xl mb-12">TV Series</h1>
      </div>
      <AIInput />
      <div className="mt-12 space-y-8">
        <MovieRow title="Bingeworthy Series" movies={shows} isLarge />
        <MovieRow title="Trending TV" movies={shows.slice().reverse()} />
        <MovieRow title="Sci-Fi & Fantasy" movies={shows.slice(1, 4)} />
      </div>
    </div>
  );
}
