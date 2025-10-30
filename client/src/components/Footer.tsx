import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-accent text-lg font-bold text-primary">TheNextHit</h3>
            <p className="text-sm text-muted-foreground">
              Advanced tracking tools for provably fair casino games. Track and find your next winning hits with precision.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/tool">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-tool">
                  Hit Tracker
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-features">
                  Features
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-docs">
                Documentation
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-help">
                Help Center
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 TheNextHit. All rights reserved. Use responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
