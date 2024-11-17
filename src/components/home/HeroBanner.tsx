import { Button } from '@/components/ui/button';

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Summer Collection
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover our new summer collection with up to 50% off on selected items.
            Limited time offer.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
}