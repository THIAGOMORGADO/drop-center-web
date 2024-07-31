'use client'

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { HomeIcon, LineChartIcon, LogoutIcon, MenuIcon, Package2Icon, PackageIcon, UsersIcon } from "../IconsSvg"
import DashboardMain from "../DashboardMain"
import { DashboardIcon, FileIcon } from "@radix-ui/react-icons"
import Sidebar from "../TooTips"
import { usePathname } from "next/navigation"

export default function SlidebarMenu() {
  const currentPath = usePathname();
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-row">

        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium ">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full sm:w-[50%] w-[23%]"
                  prefetch={false}
                  data-active={currentPath === '/dashboard'}
                >
                  <DashboardIcon className="h-5 w-5" />
                  <span className="hidden sm:block">Dashboard</span>
                </Link>
                <Link

                  href="/dashboard/home"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                  data-active={currentPath === '/dashboard/home'}

                >
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
                <Link href="#" className="flex items-center gap-1 px-2.5 text-foreground" prefetch={false}>
                  <FileIcon className="h-5 w-5" />
                  Contatos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                >
                  <PackageIcon className="h-5 w-5" />
                  Produtos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  Clientes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                >
                  <LineChartIcon className="h-5 w-5" />
                  Relatórios
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LogoutIcon className="h-5 w-5" />
                  Sair
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <DashboardMain />
      </div>
    </div>
  )
}