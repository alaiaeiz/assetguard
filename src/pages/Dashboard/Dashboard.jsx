import AppLayout from "@/components/layout/AppLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";

function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <DashboardHeader />

        <StatsGrid />
      </div>
    </AppLayout>
  );
}

export default Dashboard;