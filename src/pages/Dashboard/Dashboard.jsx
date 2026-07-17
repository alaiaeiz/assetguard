import AppLayout from "../../components/layout/AppLayout";

function Dashboard() {
  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Here's an overview of your IT assets.
        </p>
      </div>
    </AppLayout>
  );
}

export default Dashboard;