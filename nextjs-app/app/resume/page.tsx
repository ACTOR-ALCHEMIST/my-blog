export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-600">
            A passionate developer with expertise in modern web technologies.
            Focused on creating efficient, scalable, and user-friendly applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-gray-200 pl-4">
              <h3 className="text-xl font-medium">Senior Developer</h3>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Led development of multiple web applications</li>
                <li>Implemented modern frontend architectures</li>
                <li>Mentored junior developers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Sanity</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Tools</h3>
              <p className="text-gray-600">Git, VS Code, Vercel</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 