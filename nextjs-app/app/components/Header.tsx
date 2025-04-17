import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Den
        </Link>
        
        <div className="flex gap-6">
          <Link 
            href="/resume" 
            className="text-gray-600 hover:text-gray-900"
          >
            Resume
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-600 hover:text-gray-900"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
