export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
