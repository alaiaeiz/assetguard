import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { recentAssets } from "@/data/recentAssetsData";

function RecentAssets() {
  const badgeVariant = {
    Assigned: "default",
    Available: "secondary",
    Maintenance: "destructive",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Assets</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned To</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {recentAssets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell className="font-medium">
                  {asset.asset}
                </TableCell>

                <TableCell>
                  {asset.category}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      badgeVariant[asset.status] || "outline"
                    }
                  >
                    {asset.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {asset.assignedTo}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentAssets;