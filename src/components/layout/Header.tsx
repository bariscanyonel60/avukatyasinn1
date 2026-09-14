"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandLockup } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-400",
          scrolled || open
            ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
          <Link href="/" aria-label={`${siteConfig.siteName} anasayfa`}>
            <BrandLockup compact />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Ana menü"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[0.72rem] tracking-[0.16em] text-ink/80 uppercase transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden border border-ink/15 px-4 py-2 text-[0.65rem] tracking-[0.18em] text-ink uppercase transition-colors hover:border-ink/40 hover:bg-ink hover:text-paper sm:inline-flex"
            >
              İletişim
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-ink/40 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-paper lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <BrandLockup className="mb-8" />
              <nav aria-label="Mobil menü" className="flex flex-col gap-2">
                {siteConfig.nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ink/10 py-4 font-serif text-[clamp(2rem,8vw,3rem)] text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto space-y-2 text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                <p>
                  {siteConfig.contact.district} / {siteConfig.contact.city}
                </p>
                {siteConfig.contact.phoneDisplay ? (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="block transition-colors hover:text-ink"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
