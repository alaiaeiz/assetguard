import { Card, CardContent } from "@/components/ui/card";

function QuickActionCard({ title, description, icon: Icon }) {
  return (
    <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <Icon className="text-blue-600" size={22} />
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickActionCard;