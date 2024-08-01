import { Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { AddUserIcon } from "../../IconsSvg";

export function TooltipAdmin() {
  const links = {

  }


  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard/admin/createuser"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white data-[active=true]:bg-black data-[active=true]:text-white"
            prefetch={false}
          >
            <AddUserIcon className="h-5 w-5" />
            <span className="sr-only">Cadastra o Funcionario</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Cadastra o Funcionario</TooltipContent>
      </Tooltip>

    </>

  )
}