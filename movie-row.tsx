import { Star, Plus, PlayCircle, MoreHorizontal, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  match?: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  isLarge?: boolean;
}

export default function MovieRow({ title, movies, isLarge = false }: MovieRowProps) {
  return (
    <div className="py-8 space-y-4">
      <div className="container mx-auto px-4 md:px-6 flex items-end justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-display tracking-wide flex items-center gap-2">
          {title}
        </h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">
          View All
        </button>
      </div>

      <div className="relative group/row">
        <div className="flex overflow-x-auto pb-8 px-4 md:px-6 gap-4 hide-scrollbar snap-x snap-mandatory scroll-smooth">
          {movies.map((movie) => (
            <Dialog key={movie.id}>
              <DialogTrigger asChild>
                <div 
                  className={cn(
                    "flex-none snap-start relative group cursor-pointer transition-all duration-300 hover:z-10",
                    isLarge ? "w-[160px] md:w-[240px]" : "w-[140px] md:w-[200px]"
                  )}
                >
                  <div className={cn(
                    "rounded-lg overflow-hidden border border-white/5 bg-card shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:border-primary/50",
                    isLarge ? "aspect-[2/3]" : "aspect-[16/9]"
                  )}>
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
                      <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary/20 scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" />
                      
                      <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                         <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                           <Plus className="w-4 h-4" />
                         </div>
                         <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                           <ThumbsUp className="w-4 h-4" />
                         </div>
                         <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                           <MoreHorizontal className="w-4 h-4" />
                         </div>
                      </div>
                    </div>

                    {/* Match Badge */}
                    {movie.match && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary/90 text-white border-none font-bold text-[10px] shadow-lg backdrop-blur-md">
                          {movie.match}% Match
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm md:text-base text-foreground truncate group-hover:text-primary transition-colors">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span className="text-green-400 font-medium">{movie.rating} Match</span>
                      <span>•</span>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-background/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden gap-0">
                <div className="relative w-full h-[400px]">
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="font-display text-5xl text-white mb-2">{movie.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                       <span className="text-green-400 font-bold">{movie.rating} Match</span>
                       <span>{movie.year}</span>
                       <Badge variant="outline">4K HDR</Badge>
                       <Badge variant="outline">5.1</Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                        <PlayCircle className="mr-2 h-5 w-5" /> Play
                      </Button>
                      <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md">
                        <Plus className="mr-2 h-5 w-5" /> My List
                      </Button>
                      <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md">
                         <ThumbsUp className="mr-2 h-5 w-5" /> Rate
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Star className="h-4 w-4 fill-current" /> AI Analysis
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Based on your interest in sophisticated dramas and high-stakes narratives, our AI recommends {movie.title}. 
                      The cinematography aligns with your preference for dark, moody visuals, and the character dynamics mirror those found in your other favorites.
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-400">
                    <div>
                      <span className="block text-gray-500 mb-1">Cast</span>
                      Gabriel Macht, Patrick J. Adams, Meghan Markle
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1">Genres</span>
                      Drama, Legal, Comedy
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1">This movie is</span>
                      Witty • Intelligent • Cynical
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute top-0 right-0 bottom-8 w-12 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 bottom-8 w-12 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
