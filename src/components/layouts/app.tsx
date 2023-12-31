import dynamic from "next/dynamic"


const AdminLayout = dynamic(() => import('@/components/layouts/admin'));
const OwnerLayout = dynamic(()=> import('@/components/layouts/owner'))

export default function AppLayout ({
    userPermissions,
    ...props
} : {
    userPermissions: string[]
}) {
    if (true) {
        return <AdminLayout {...props} />;
    }
    return <OwnerLayout {...props} />;
}