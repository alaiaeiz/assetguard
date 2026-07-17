import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, ArrowUpDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AssetsToolbar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  sortOrder,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 gap-4">
        {/* Search */}
        <div className="relative w-full md:max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <Input
            placeholder="Search assets..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Status Filter */}
        <Select
          value={statusFilter}
          onValueChange={onStatusChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Assigned">Assigned</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        {/* Sorting */}
        <Button
          variant="outline"
          onClick={() =>
            onSortChange(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          <ArrowUpDown className="mr-2 h-4 w-4" />
          {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </Button>

        {/* Add Asset */}
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Asset
        </Button>
      </div>
    </div>
  );
}

export default AssetsToolbar;