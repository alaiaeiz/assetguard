import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ActivityItem from "./ActivityItem";
import { recentActivities } from "@/data/recentActivitiesData";

function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {recentActivities.map((activity) => (
          <ActivityItem
            key={activity.id}
            title={activity.title}
            type={activity.type}
            time={activity.time}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentActivity;