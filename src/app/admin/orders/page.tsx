import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminOrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">注文</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-center py-16 border border-dashed rounded-lg">
                    <h2 className="text-xl font-semibold">注文が見つかりません</h2>
                    <p className="text-muted-foreground mt-2">
                        お客様が注文すると、ここに表示されます。
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
