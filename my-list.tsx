import Navbar from "@/components/navbar";
import MovieRow from "@/components/movie-row";
import { Bookmark, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const myList = [
  { id: 1, title: "Inception", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop", rating: 8.8, year: 2010, match: 95 },
  { id: 101, title: "Succession", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", rating: 8.8, year: 2018, match: 99 },
];

export default function MyListPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 pt-24">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="font-display text-5xl md:text-7xl">My List</h1>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Edit List
          </Button>
        </div>

        {myList.length > 0 ? (
          <div className="space-y-12">
            <MovieRow title="Continue Watching" movies={myList} isLarge />
            <MovieRow title="Saved for Later" movies={myList.slice().reverse()} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mb-6">
              <Bookmark className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your list is empty</h2>
            <p className="text-muted-foreground max-w-sm">
              Add movies and TV shows to your list to keep track of what you want to watch.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              Browse Movies
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
