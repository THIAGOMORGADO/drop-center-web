'use client'

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DashboardIcon, HomeIcon, LineChartIcon, LogoutIcon, MenuIcon, Package2Icon, PackageIcon, SettingsIcon, UsersIcon } from "../IconsSvg"
import DashboardMain from "../DashboardMain"
import { FileIcon } from "@radix-ui/react-icons"
import Sidebar from "../TooTips"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"
import ItemAdminOrDashBoard from "../ItemAdminOrDashBoard"

export default function SlidebarMenu({ children }: { children: React.ReactNode }) {
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

            <SheetContent side="left" className="sm:max-w-xs flex flex-col gap-7 justify-center  border-none w-[300px] rounded-e-md ">
              <div className="flex flex-row items-center justify-start gap-2 ">
                <DashboardIcon className="h-10 w-10" />
                <h1 className="text-2xl font-bold">Agência Meta</h1>
              </div>


              {/* TooltipMain */}
              <nav className="flex flex-col gap-6 justify-strart items-start  h-full pt-10">
                <Link
                  href="/dashboard/home"
                  className="flex w-full items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                  data-active={currentPath === '/dashboard/home'}

                >
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="/dashboard/clients"
                  className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
                  prefetch={false}
                  data-active={currentPath === '/dashboard/clients'}
                >

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

                <ItemAdminOrDashBoard />

              </nav>

              {/* TooltipFooter */}
              <nav className="mt-auto flex flex-row justify-between items-center gap-4 px-2 sm:py-5 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3"
                        prefetch={false}
                      >
                        <SettingsIcon className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>

                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
                        prefetch={false}
                      >
                        <LogoutIcon className="h-5 w-5" />
                        <span className="sr-only">Log out</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Log-out</TooltipContent>

                  </Tooltip>
                </TooltipProvider>
              </nav>
            </SheetContent>

          </Sheet>
        </header>

        <DashboardMain />
      </div>
      {children}
    </div >
  )
}