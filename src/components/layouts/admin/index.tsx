import NavBar from "@/components/layouts/navigation/top-navbar";
import { siteSettings } from "@/settings/site.setting";
import { Fragment } from "react";
import SidebarItem from "../navigation/sidebar-item";


const AdminLayout : React.FC<{children?: React.ReactNode}> = ({children}) => {
    
    const SidebarItemMap = () => (
        <Fragment>
            {siteSettings.sidebarLinks.admin.map(({href,label,icon}) => (
                <SidebarItem href={href} label={label} icon={icon} key={href} />
            ))}
        </Fragment>
    )

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
            <NavBar/>
            <div className="flex flex-1 pt-20">
                <aside className="left-0 right-auto xl:w-76 fixed bottom-0 hidden h-full w-72 overflow-y-auto bg-white px-4 pt-22 shadow lg:block">
                    <div className="flex flex-col space-y-6 py-3">
                        <SidebarItemMap/>
                    </div>
                </aside>
                <main className="w-full xl:pl-76 lg:pl-72">
                    <div className="h-full p-5 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout