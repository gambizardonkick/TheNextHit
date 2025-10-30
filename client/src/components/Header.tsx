import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/">
          <span className="flex items-center gap-2 font-accent text-xl font-bold cursor-pointer" data-testid="link-home">
            <span className="text-primary">TheNextHit</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/">
            <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" data-testid="link-nav-home">
              Home
            </span>
          </Link>
          <Link href="/tool">
            <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" data-testid="link-nav-tool">
              Tool
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
