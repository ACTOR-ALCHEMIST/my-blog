import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Space</h1>
        <p className="text-xl text-gray-600 mb-8">
          A place where I share my thoughts, experiences, and professional journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/resume" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Resume</h2>
            <p className="text-gray-600">Learn about my professional experience and skills</p>
          </Link>
          <Link 
            href="/blog" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Blog</h2>
            <p className="text-gray-600">Read my latest thoughts and articles</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
