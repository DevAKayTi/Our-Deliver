import { NextPage } from "next";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean;
    getLayout?: (page: React.ReactElement) => React.ReactNode;
}