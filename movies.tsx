import Navbar from "@/components/navbar";
import MovieRow from "@/components/movie-row";
import AIInput from "@/components/ai-input";

const movies = [
  { id: 1, title: "The Shawshank Redemption", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop", rating: 9.3, year: 1994, match: 99 },
  { id: 2, title: "The Godfather", image: "https://images.unsplash.com/photo-1610915643669-7c49b01518b5?q=80&w=2070&auto=format&fit=crop", rating: 9.2, year: 1972, match: 98 },
  { id: 3, title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1594908122396-66442194c5e6?q=80&w=2070&auto=format&fit=crop", rating: 8.9, year: 1994, match: 97 },
  { id: 4, title: "Fight Club", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop", rating: 8.8, year: 1999, match: 95 },
  { id: 5, title: "Forrest Gump", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop", rating: 8.8, year: 1994, match: 94 },
];

const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 pt-24">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-display text-5xl md:text-7xl mb-8">Movies</h1>
        <div className="flex flex-wrap gap-4 mb-12">
          {genres.map(genre => (
            <button key={genre} className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-sm font-medium">
              {genre}
            </button>
          ))}
        </div>
      </div>
      <AIInput />
      <div className="mt-12 space-y-8">
        <MovieRow title="Top Rated Movies" movies={movies} isLarge />
        <MovieRow title="New Releases" movies={movies.slice().reverse()} />
        <MovieRow title="Action Blockbusters" movies={movies.slice(2)} />
      </div>
    </div>
  );
}
