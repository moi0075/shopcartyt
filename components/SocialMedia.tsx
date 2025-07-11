import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
];

function SocialMedia({ className, iconClassName, tooltipClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold",
                tooltipClassName
            )}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
