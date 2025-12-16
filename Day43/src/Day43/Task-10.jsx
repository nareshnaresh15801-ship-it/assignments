

export default function App3456() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">My Store</h1>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Products</h2>

        <div className="border rounded p-4 flex justify-between">
          <span>Laptop</span>
          <span className="font-medium">$999.99</span>
        </div>

        <div className="border rounded p-4 flex justify-between">
          <span>Phone</span>
          <span className="font-medium">$699.99</span>
        </div>

        <div className="border rounded p-4 flex justify-between">
          <span>Headphones</span>
          <span className="font-medium">$199.99</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Store
      </footer>
    </div>
  );
}
