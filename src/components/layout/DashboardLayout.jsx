function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        Sidebar
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <header className="h-16 bg-white border-b flex items-center px-6">
          Navbar
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;