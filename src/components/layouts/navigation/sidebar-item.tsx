import { getIcon } from "@/utils/get-icon"
import * as sidebarIcons from '@/components/icons/sidebar';
import Link from "next/link"

const SidebarItem = ({href,icon,label} : any) => {
    const closeSidebar = () => {
        return 
    }
    return (
        <Link 
        href={href}
        className="text-start flex w-full items-center text-base text-body-dark fous: text-accent"
        >
            {getIcon({
                iconList: sidebarIcons,
                iconName: icon,
                className: 'w-5 h-5 me-4',
            })}
            <span onClick={()=> closeSidebar()}>{label}</span>
        </Link>
    )
}

export default SidebarItem