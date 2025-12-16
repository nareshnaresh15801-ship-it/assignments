

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-semibold">My App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default Layout;
