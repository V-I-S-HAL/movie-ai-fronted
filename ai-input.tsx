import { useState } from "react";
import { Send, Sparkles, TrendingUp, Compass, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AIInput() {
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    { icon: TrendingUp, text: "Movies like 'The Social Network' but darker" },
    { icon: Compass, text: "Sci-fi hidden gems from the 90s" },
    { icon: Film, text: "Critically acclaimed legal dramas" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 -mt-8 relative z-30">
      <div 
        className={cn(
          "bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-primary/5 transition-all duration-300 ease-out",
          isFocused ? "scale-[1.02] ring-2 ring-primary/50 bg-black" : "hover:bg-card/95"
        )}
      >
        <div className="flex items-center gap-3 p-2 md:p-3">
          <div className="h-10 w-10 md:h-12 md:w-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
            <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          
          <input 
            type="text" 
            placeholder="Ask AI... (e.g. 'Psychological thrillers with a plot twist')"
            className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground/70 focus:outline-none text-base md:text-lg h-full py-2 font-medium"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          
          <Button size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-white px-6 transition-all hover:scale-105 active:scale-95">
            <Send className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline font-bold">Generate</span>
          </Button>
        </div>

        {/* Animated Suggestions Panel */}
        <div className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out px-4",
          isFocused ? "max-h-[200px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        )}>
          <div className="h-px w-full bg-white/10 mb-4" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 pl-1">Suggested Prompts</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item, idx) => (
              <button 
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-gray-300 transition-colors"
              >
                <item.icon className="h-3 w-3 text-primary" />
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
