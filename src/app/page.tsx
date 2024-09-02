import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import { JoinMail } from "@/components/MailList";
import { LatestDemo } from "@/components/blogs/Latest";
import Supporters from "@/components/supporters/SupportedBy";
import TrustedBy from "@/components/supporters/TrustedBy";
import Image from "next/image";
import { NavbarDemo } from "@/components/TopNavbar";
import HomePage from "@/components/home/Home";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar isShowConnect={false}  />
  
      <div  className="w-full    min-h-screen     mx-auto">
         <div >
      <HomePage  />
      </div>
       </div>
  
    </main>
  );
}
