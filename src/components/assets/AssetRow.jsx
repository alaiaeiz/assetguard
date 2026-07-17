import { Badge } from "@/components/ui/badge";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

function AssetRow({ asset }) {
  const badgeVariant = {
    Assigned: "default",
    Available: "secondary",
    Maintenance: "destructive",
  };

  return (
    <TableRow>
      <TableCell className="font-medium">
        {asset.name}
      </TableCell>

      <TableCell>
        {asset.category}
      </TableCell>

      <TableCell>
        {asset.serialNumber}
      </TableCell>

      <TableCell>
        <Badge
          variant={badgeVariant[asset.status] || "outline"}
        >
          {asset.status}
        </Badge>
      </TableCell>

      <TableCell>
        {asset.assignedTo}
      </TableCell>
    </TableRow>
  );
}

export default AssetRow;