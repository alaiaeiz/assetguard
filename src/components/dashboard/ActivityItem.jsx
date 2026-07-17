import { Badge } from "@/components/ui/badge";

function ActivityItem({ title, type, time }) {
  const badgeVariant = {
    assigned: "default",
    maintenance: "secondary",
    added: "outline",
    returned: "secondary",
  };

  return (
    <div className="flex items-start justify-between border-b pb-4 last:border-b-0">
      <div className="space-y-1">
        <p className="font-medium">{title}</p>

        <p className="text-sm text-slate-500">
          {time}
        </p>
      </div>

      <Badge variant={badgeVariant[type] || "outline"}>
        {type}
      </Badge>
    </div>
  );
}

export default ActivityItem;