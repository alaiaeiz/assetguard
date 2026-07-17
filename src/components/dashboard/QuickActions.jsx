import QuickActionCard from "./QuickActionCard";
import { quickActions } from "@/data/quickActionsData";

function QuickActions() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="text-slate-500">
          Frequently used actions for managing assets.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.title}
            title={action.title}
            description={action.description}
            icon={action.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default QuickActions;