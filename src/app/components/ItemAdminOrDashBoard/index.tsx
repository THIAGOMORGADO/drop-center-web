'use client'
import Link from "next/link"
import { useState } from "react"
import { AddUserIcon } from "../IconsSvg"
import { usePathname } from "next/navigation"

export default function ItemAdminOrDashBoard() {
  const [isAdmin, setIsAdmin] = useState(true)
  const currentPath = usePathname();
  return (
    <div className="flex flex-col gap-2 justify-center  pt-10 w-full">
      {isAdmin ? (
        <>
          <div className="my-2 px-2.5 pb-10">
            <div className="h-px bg-gray-300">
              <span className="text-muted-foreground"></span>
            </div>
          </div>
          <Link
            href="/dashboard/admin/createuser"
            className="flex items-center gap-1 px-2.5 text-muted-foreground hover:text-foreground data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:p-3 rounded-full "
            prefetch={false}
            data-active={currentPath === '/dashboard/admin'}
          >
            <AddUserIcon className="h-5 w-5" />
            Cadastrar Funcionário
          </Link>
        </>
      ) : null}
    </div>
  )
}