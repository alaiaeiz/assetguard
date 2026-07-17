import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

function EmptyState({ onClearFilters }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-slate-100 p-5">
        <PackageSearch
          className="text-slate-500"
          size={40}
        />
      </div>

      <h2 className="text-xl font-semibold">
        No assets found
      </h2>

      <p className="mt-2 max-w-sm text-slate-500">
        Try adjusting your search or filter criteria.
      </p>

      <Button
        className="mt-6"
        variant="outline"
        onClick={onClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
}

export default EmptyState;