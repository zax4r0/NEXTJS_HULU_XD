import React from "react"
import { useRouter } from "next/router"
interface SidebarRowProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  path: string
}
const HeaderItem: React.FC<SidebarRowProps> = ({ Icon, title, path }) => {
  const router = useRouter()
  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-20 hover:text-green-400"
      onClick={() => router.push(path)}
    >
      {Icon && <Icon className="h-5 mb-1 hover:animate-bounce" />}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
