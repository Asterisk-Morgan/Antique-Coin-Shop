import Image from "next/image";
import { coins } from "@/lib/coins";
import { getPlaceholderImageById } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminProductsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">製品</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">画像</span>
              </TableHead>
              <TableHead>名前</TableHead>
              <TableHead>原産地</TableHead>
              <TableHead className="hidden md:table-cell">価格</TableHead>
              <TableHead>
                <span className="sr-only">アクション</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins.map((coin) => {
              const image = getPlaceholderImageById(coin.imageId);
              return (
                <TableRow key={coin.id}>
                  <TableCell className="hidden sm:table-cell">
                    {image && (
                      <Image
                        alt={coin.name}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={image.imageUrl}
                        width="64"
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{coin.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{coin.origin}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${coin.price.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">メニューを切り替える</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>アクション</DropdownMenuLabel>
                        <DropdownMenuItem>編集</DropdownMenuItem>
                        <DropdownMenuItem>削除</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
