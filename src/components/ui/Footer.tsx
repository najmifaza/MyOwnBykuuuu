import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-10 md:px-40 bg-black/10 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between pb-6 pt-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; Made with 🖤 by Najmi Faza
        </p>

        {/* Bagian Kanan: Social Icons */}
        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/adridinan-najmi-faza-80b88a301/"
            target="_blank"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://www.tiktok.com/@najmifaza._" target="_blank">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.tiktok.com/@najmifaza._" target="_blank">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <FaTiktok />
              <span className="sr-only">TikTok</span>
            </Button>
          </Link>
          <Link href="https://www.instagram.com/najmi.zaa/" target="_blank">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
