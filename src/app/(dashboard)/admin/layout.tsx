import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import BarProvider from "@/components/shared/toggleBarContext";
import { LayoutConsumer } from "@/components/shared/toggleBarContext";
import './style.css'
// const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })


export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <BarProvider>
            <header className="navbar relative pb-16 z-50">
               <Navbar />
            </header>
            <section className="col">
               <main className="sidebar relative z-50 overflow-hidden">
                  <Sidebar />
               </main>
               <LayoutConsumer>{children}</LayoutConsumer>
            </section>
         </BarProvider>
      </div>
   );
}
