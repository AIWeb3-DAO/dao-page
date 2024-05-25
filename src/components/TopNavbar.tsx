"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/Navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 border rounded-3xl border-gray-700  max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/blog">Our blog</HoveredLink>
            <HoveredLink href="/about">About us</HoveredLink>
            <HoveredLink href="/events">Our Events</HoveredLink>
            <HoveredLink href="/nfts">Our NFTs</HoveredLink>
          
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Social">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Discord"
              href="https://algochurn.com"
              src="https://pbs.twimg.com/profile_images/1719768085815803905/Qt-WhTGg_400x400.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Telegram"
              href="https://tailwindmasterkit.com"
              src="https://pbs.twimg.com/profile_images/1183117696730390529/LRDASku7_400x400.jpg"
              description="Production ready Tailwind css components for your next project"
            />
         
          </div>
        </MenuItem>
        {/*}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
  */}
      </Menu>
    </div>
  );
}
