import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Zap, Shield, TrendingUp, Search, Dices } from "lucide-react";
import stakeLogo from "@assets/stake_logo.png";
import shuffleLogo from "@assets/shuffle_logo.png";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-accent text-4xl md:text-6xl font-bold tracking-tight">
              Track Your Next <span className="text-primary">Winning Hit</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced tracking tools for provably fair casino games. Analyze seed data to find your next high-value hits with precision and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2" data-testid="button-get-started" asChild>
                <Link href="/tool">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold">Supported Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Works seamlessly with leading provably fair casinos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={stakeLogo} 
                    alt="Stake Casino" 
                    className="h-20 w-auto object-contain"
                  />
                  <h3 className="font-accent text-xl font-semibold">Stake.com</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Leading crypto casino with provably fair gaming
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={shuffleLogo} 
                    alt="Shuffle Casino" 
                    className="h-20 w-auto object-contain"
                  />
                  <h3 className="font-accent text-xl font-semibold">Shuffle.com</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Modern gaming platform with transparent algorithms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to optimize your gaming strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Precise Tracking</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze seed data to track and find high-value outcomes with accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Process thousands of rounds per second to find your next winning opportunity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Provably Fair</CardTitle>
                <CardDescription>
                  Works with cryptographically verifiable game outcomes for complete transparency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Dices className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Keno Support</CardTitle>
                <CardDescription>
                  Find optimal number combinations and track upcoming hit patterns for maximum returns
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Limbo Analysis</CardTitle>
                <CardDescription>
                  Track high multiplier rounds and identify profitable betting opportunities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Deep Scanning</CardTitle>
                <CardDescription>
                  Search through up to 1 million rounds to find the perfect opportunities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-accent text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">
                Simple, transparent process in three steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="font-accent text-xl font-semibold">Enter Seeds</h3>
                <p className="text-sm text-muted-foreground">
                  Input your client and server seeds from the casino platform
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="font-accent text-xl font-semibold">Configure Search</h3>
                <p className="text-sm text-muted-foreground">
                  Set your target parameters and search depth preferences
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="font-accent text-xl font-semibold">Find Hits</h3>
                <p className="text-sm text-muted-foreground">
                  Discover upcoming winning rounds and plan your strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="font-accent text-3xl md:text-4xl font-bold">
                Ready to Track Your Next Hit?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start analyzing provably fair games today and find your next winning hits with precision tracking tools.
              </p>
              <Button size="lg" className="gap-2" data-testid="button-cta-start" asChild>
                <Link href="/tool">
                  Start Tracking Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
