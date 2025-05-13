import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="font-bold text-[#2dd4bf]">Rohit Shenoy</span>
            </Link>
          </div>

          <div className="text-sm text-foreground/70">
            <span className="text-[#2dd4bf]">© {currentYear} Rohit Shenoy</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-foreground/60">
          <p>
            A student exploring the intersections of science, artificial intelligence, and interdisciplinary learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
