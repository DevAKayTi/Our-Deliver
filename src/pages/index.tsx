import AppLayout from "@/components/layouts/app";
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"

const AdminDashboard = dynamic(()=> import ('@/components/dashboard/admin'));
const OwnerDashboard = dynamic(()=> import ('@/components/dashboard/owner'));

export default function Dashboard ({userPermissions} : {userPermissions : string[]}){
  if (true) {
    return <AdminDashboard />;
  }
  return <OwnerDashboard />;
}

Dashboard.layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      userPermissions : ''
    }
  }
}
