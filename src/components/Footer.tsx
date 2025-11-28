export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-hero border-t border-primary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="font-display text-2xl font-bold text-primary">BRINDA M S</h3>
          <p className="text-muted-foreground">
            Building the future, one line of code at a time.
          </p>
          <p className="text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Brinda M S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
