import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/NouhaylaMouakkal", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/nouhaylamouakkal/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:mouakkalnouhayla@gmail.com", label: "Email", icon: Mail },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">
                <span className="text-foreground">Nouhayla</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              AI Engineer & Product Thinker crafting intelligent systems at the intersection of machine learning,
              user experience, and scalable engineering.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="label mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="label mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:mouakkalnouhayla@gmail.com" className="hover:text-foreground transition-colors">
                  mouakkalnouhayla@gmail.com
                </a>
              </li>
              <li>Casablanca, Morocco</li>
              <li>
                <a href="tel:+212708016211" className="hover:text-foreground transition-colors">
                  +212708016211
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Nouhayla Mouakkal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
