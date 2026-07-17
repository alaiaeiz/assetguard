import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import RecentAssets from "./RecentAssets";

function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>

      <RecentAssets />
    </div>
  );
}

export default DashboardContent;