import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          `text-2xl 
           text-shop_dark_green 
           font-black 
           tracking-winder 
           uppercase 
           hover:text-shop_light_green
           hoverEffect
           group
           font-sans`,
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
