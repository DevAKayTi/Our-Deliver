import dynamic from "next/dynamic"


const AdminLayout = dynamic(() => import('@/components/layouts/admin'));
const OwnerLayout = dynamic(()=> import('@/components/layouts/owner'))

export default function AppLayout ({
    userPermissions,
    ...props
} : {
    userPermissions: string[]
}) {
    return true ? <AdminLayout {...props} /> : <OwnerLayout {...props} />
}