import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, ShoppingCart } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1% from last month" },
    { title: "Orders", value: "+2350", icon: ShoppingCart, change: "+180.1% from last month" },
    { title: "Products", value: "6", icon: Package, change: "Total products in catalog" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-headline mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-muted-foreground">No recent orders to display.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
