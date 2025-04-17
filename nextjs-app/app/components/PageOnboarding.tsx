export default function PageOnboarding() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Your Blog</h2>
      <p className="text-gray-600 mb-8">
        This is your personal space to share your thoughts and experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
          <p className="text-gray-600">
            Learn how to create and manage your blog posts using Sanity CMS.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Customize Your Space</h3>
          <p className="text-gray-600">
            Personalize your blog with custom themes and layouts.
          </p>
        </div>
      </div>
    </div>
  )
} 