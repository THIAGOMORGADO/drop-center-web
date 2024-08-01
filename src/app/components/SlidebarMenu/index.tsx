'use client'

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


import DashboardMain from "../DashboardMain"

import Sidebar from "../TooTips"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { menuLinkFooter, menuLinkMain } from "@/app/utils/links"
import { DashboardIcon, LogoutIcon, MenuIcon, SettingsIcon } from "../IconsSvg"

export default function SlidebarMenu() {
  const currentPath = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-row ">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full w-[50%]"
                  prefetch={false}
                  data-active={currentPath === '/dashboard'}
                >
                  <DashboardIcon className="h-5 w-5" />
                  dashboard
                </Link>
                <Link

                  href="/dashboard/home"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full w-[50%]"
                  prefetch={false}
                  data-active={currentPath === '/dashboard/home'}

                >
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <FileIcon className="h-5 w-5" />
                  Contatos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full w-[50%]"
                  prefetch={false}
                >
                  <PackageIcon className="h-5 w-5" />
                  Produtos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full w-[50%]"
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  Clientes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full w-[50%]"
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

      {children}
    </div>
  )
}