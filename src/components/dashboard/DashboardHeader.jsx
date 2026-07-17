function DashboardHeader() {
  const currentHour = new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">
        {greeting}, Amey 👋
      </h1>

      <p className="text-slate-500">
        Welcome back to AssetGuard. Here's an overview of your IT assets.
      </p>
    </div>
  );
}

export default DashboardHeader;