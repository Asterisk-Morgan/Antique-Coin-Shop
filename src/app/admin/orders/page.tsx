import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminOrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-center py-16 border border-dashed rounded-lg">
                    <h2 className="text-xl font-semibold">No Orders Found</h2>
                    <p className="text-muted-foreground mt-2">
                        When customers place orders, they will appear here.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
