import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Nouhayla Mouakkal</h3>
          <p className="text-muted-foreground">AI Consultant & Big Data Engineering Student</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/NouhaylaMouakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nouhayla-mouakkal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:nouhaylamouakkal@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.instagram.com/nouhayla.mkl1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-4 border-t border-border text-center">
        <p className="text-muted-foreground">&copy; {currentYear} Nouhayla Mouakkal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
