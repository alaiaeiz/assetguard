import { useMemo, useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import AssetsHeader from "@/components/assets/AssetsHeader";
import AssetsToolbar from "@/components/assets/AssetsToolbar";
import AssetsTable from "@/components/assets/AssetsTable";
import EmptyState from "@/components/assets/EmptyState";

import { assets as initialAssets } from "@/data/assetsData";

function Assets() {
    const [assets, setAssets] = useState(initialAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const clearFilters = () => {
  setSearchTerm("");
  setStatusFilter("All");
};
const [sortOrder, setSortOrder] = useState("asc");


const filteredAssets = useMemo(() => {
  const keyword = searchTerm.toLowerCase();

  const filtered = assets.filter((asset) => {
    const matchesSearch =
      asset.name.toLowerCase().includes(keyword) ||
      asset.category.toLowerCase().includes(keyword) ||
      asset.serialNumber.toLowerCase().includes(keyword) ||
      asset.assignedTo.toLowerCase().includes(keyword);

    const matchesStatus =
      statusFilter === "All" ||
      asset.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return [...filtered].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });
}, [searchTerm, statusFilter, sortOrder]);

  return (
    <AppLayout>
      <div className="space-y-8">
        <AssetsHeader />

       <AssetsToolbar
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  statusFilter={statusFilter}
  onStatusChange={setStatusFilter}
  sortOrder={sortOrder}
  onSortChange={setSortOrder}
/>

        {filteredAssets.length > 0 ? (
  <AssetsTable assets={filteredAssets} />
) : (
  <EmptyState onClearFilters={clearFilters} />
)}
      </div>
    </AppLayout>
  );
}



export default Assets;