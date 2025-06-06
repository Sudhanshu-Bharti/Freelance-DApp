"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { WalletDisplay } from "./WalletDisplay";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold">DF</span>
          </div>
          <span className="text-white font-bold text-xl">DeciFreelance</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#features"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#categories"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Categories
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-zinc-300 hover:text-white p-2 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Button
            variant="outline"
            className="bg-transparent border-emerald-500/30 text-zinc-300 hover:bg-emerald-500/10 hover:border-emerald-500/50"
          >
            Sign In
          </Button>
          <WalletDisplay />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-300 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-emerald-900/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col items-center justify-center",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
        <div className="flex flex-col items-center gap-6 px-6">
          <Link
            href="/"
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/#features"
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link
            href="/#categories"
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Categories
          </Link>

          <div className="flex flex-col w-full gap-4 mt-6">
            <Button
              variant="outline"
              className="w-full bg-transparent border-emerald-500/30 text-white hover:bg-emerald-500/10 hover:border-emerald-500/50"
            >
              Sign In
            </Button>
            <WalletDisplay />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
