import Link from "next/link";
import { Coins } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Coins className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CoinCollect</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/80">
            <Link href="/about" className="hover:text-primary">会社概要</Link>
            <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
            <Link href="/terms" className="hover:text-primary">利用規約</Link>
            <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
          </nav>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} CoinCollect. 無断複写・転載を禁じます。
          </p>
        </div>
      </div>
    </footer>
  );
}
