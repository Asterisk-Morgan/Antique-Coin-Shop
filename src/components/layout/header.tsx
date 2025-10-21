"use client";

import Link from "next/link";
import { Coins, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { CartSheet } from "@/components/cart/cart-sheet";

export function Header() {
  const { cartCount } = useCart();

  const navLinks = [
    { href: "/", label: "ホーム" },
    { href: "/identify", label: "AI鑑定" },
    { href: "/#collection", label: "コレクション" },
    { href: "/admin", label: "管理者" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Coins className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              CoinCollect
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニューを開閉</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Coins className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">CoinCollect</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex-1" />
          <nav className="flex items-center space-x-2">
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">ショッピングカート</span>
              </Button>
            </CartSheet>

            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">ユーザーアカウント</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
