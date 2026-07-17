import { Card, CardContent } from "@/components/ui/card";

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <Card className="shadow-sm border border-slate-200">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <Icon className="text-white" size={22} />
        </div>
      </CardContent>
    </Card>
  );
}

export default StatCard;