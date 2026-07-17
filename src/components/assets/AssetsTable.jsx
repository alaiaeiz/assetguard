import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AssetRow from "./AssetRow";

function AssetsTable({ assets }) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned To</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {assets.map((asset) => (
              <AssetRow
                key={asset.id}
                asset={asset}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AssetsTable;