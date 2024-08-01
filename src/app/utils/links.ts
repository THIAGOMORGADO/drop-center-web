import { HomeIcon, LineChartIcon, LogoutIcon, PackageIcon, SettingsIcon, UsersIcon, VideoCallIcon } from "../components/IconsSvg"
export const menuLinkMain = [
  {
    href: "/dashboard/home",
    icon: HomeIcon,
    name: "Home"
  },
  {
    href: "/dashboard/products",
    icon: PackageIcon,
    name: "Produtos"
  },
  {
    href: "/dashboard/clients",
    icon: UsersIcon,
    name: "Contatos"
  },
  {
    href: "/dashboard/orders",
    icon: VideoCallIcon,
    name: "Salas"
  },
  {
    href: "/dashboard/analytics",
    icon: LineChartIcon,
    name: "Analise"
  }
]
export const menuLinkFooter = [{
    href: "/dashboard/settings",
    icon: SettingsIcon,
    name: "Configuraçes"
  },
  {
    href: "/dashboard/logout",
    icon: LogoutIcon,
    name: "Logout"
  }
]