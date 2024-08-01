import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { DashboardIcon, LogoutIcon, SettingsIcon } from "../IconsSvg"
import Link from "next/link"
import { linkTooltip } from "@/app/utils/linkTooltip"

export default function Sidebar() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex  text-white">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 text-black">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="#"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base hover:text-white"
                  prefetch={true}
                >
                  <DashboardIcon className="h-4 w-4 transition-all group-hover:scale-110" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pagina Inicial</TooltipContent>

            </Tooltip>

            {
              linkTooltip.map((link) => {
                return (
                  <Tooltip key={link.href}>
                    <TooltipTrigger asChild>
                      <Link href={link.href} className={link.className}>
                        {link.icon && <link.icon className="h-5 w-5" />}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.name}</TooltipContent>
                  </Tooltip>
                )
              })
            }
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5 ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
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
              <TooltipContent side="right">Settings</TooltipContent>

            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </>

  )
}