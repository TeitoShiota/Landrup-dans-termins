import Navbar from "@/containers/Navbar";

export default function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            { children }
            <Navbar />
        </>
    )
}