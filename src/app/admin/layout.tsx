import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger, SidebarFooter } from "@/components/ui/sidebar";
import { Coins, Home, LayoutDashboard, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <SidebarProvider>
                <Sidebar side="left" variant="inset" collapsible="icon">
                    <SidebarHeader>
                        <div className="flex items-center gap-2 p-2">
                            <Coins className="text-primary size-7" />
                            <h2 className="text-lg font-headline font-semibold group-data-[collapsible=icon]:hidden">CoinCollect 管理</h2>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="ダッシュボード">
                                    <Link href="/admin/dashboard"><LayoutDashboard /> <span className="group-data-[collapsible=icon]:hidden">ダッシュボード</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                             <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="製品">
                                    <Link href="/admin/products"><Package /> <span className="group-data-[collapsible=icon]:hidden">製品</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                             <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="注文">
                                    <Link href="/admin/orders"><ShoppingCart /> <span className="group-data-[collapsible=icon]:hidden">注文</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter>
                         <SidebarMenu>
                             <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="メインサイト">
                                    <Link href="/"><Home /> <span className="group-data-[collapsible=icon]:hidden">サイトに戻る</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                         </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <div className="p-4 rounded-lg border bg-card/90 shadow-sm">
                        <div className="mb-4">
                            <SidebarTrigger />
                        </div>
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
