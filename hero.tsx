import { Play, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  image: string;
  title: string;
  description: string;
  rating: string;
  year: string;
  genre: string[];
}

export default function Hero({ image, title, description, rating, year, genre }: HeroProps) {
  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden bg-background flex items-center pt-20 pb-20 md:pb-0">
      
      {/* Dynamic Background (Blurred) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-[40px] md:opacity-30 md:blur-3xl scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-50 pointer-events-none" />

      {/* Gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent md:to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="container relative z-20 mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="flex flex-col gap-6 animate-in slide-in-from-left-5 duration-700 fade-in fill-mode-forwards order-2 md:order-1 text-center md:text-left items-center md:items-start">
           <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
              AI Match: 98%
            </Badge>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{year}</span>
            <span className="text-sm font-medium text-gray-300">•</span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{genre.join(" / ")}</span>
          </div>

          <h1 className="font-display text-6xl md:text-9xl text-white leading-[0.85] tracking-tight text-shadow-lg">
            {title}
          </h1>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-1.5 h-5 md:h-6 bg-primary skew-x-[-12deg]" />
              ))}
               <div className="w-1.5 h-5 md:h-6 bg-gray-700 skew-x-[-12deg]" />
            </div>
            <span className="font-display text-lg md:text-xl tracking-wide ml-2 text-gray-200">IMDB {rating}</span>
          </div>

          <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl text-shadow-sm font-light">
            {description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2 w-full">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 md:h-14 px-8 md:px-10 rounded-full shadow-[0_0_40px_-10px_var(--color-primary)] transition-all hover:scale-105 border border-primary/20 flex-1 md:flex-none">
              <Play className="mr-2 h-5 w-5 fill-current" /> Watch Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:border-white/30 text-white h-12 md:h-14 px-8 rounded-full backdrop-blur-md transition-all flex-1 md:flex-none">
              <Check className="mr-2 h-5 w-5" /> My List
            </Button>
          </div>
        </div>

        {/* Right Column: Poster Art */}
        <div className="flex justify-center items-center relative animate-in zoom-in-95 duration-1000 delay-200 fade-in fill-mode-forwards order-1 md:order-2 mt-8 md:mt-0">
          {/* Glowing effect behind poster */}
          <div className="absolute inset-0 bg-primary/20 blur-[60px] md:blur-[100px] rounded-full scale-75" />
          
          <div className="relative group perspective-1000">
            <div className="relative w-[200px] md:w-[340px] h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-black/80 transition-transform duration-500 hover:rotate-y-6 hover:scale-105 border border-white/5">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
