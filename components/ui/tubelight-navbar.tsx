"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export interface NavItem {
  name: string
  url: string
  icon?: React.ReactNode
}

interface NavbarProps {
  items: NavItem[]
  className?: string
  theme: "light" | "dark"
}

export function TubelightNavbar({ items, className, theme }: NavbarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname)
  const [isMobile, setIsMobile] = useState(false)
  const [isDark] = useState((theme === "light") ? false : true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <div
      className={cn(
        `fixed ${isMobile ? 'bottom-0' : 'top-0'} left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6`,
        className,
      )}
    >
      <div className={`flex justify-between items-center gap-3 ${isDark ? 'bg-trasnparent backdrop-blur-sm' : 'bg-white/80 border border-border shadow-2xl'} py-1 px-1 rounded-full shadow-4xl w-auto sm:w-[42rem]`}>
        <div className={`hidden sm:block px-4 text-lg ${isDark ? 'text-white' : 'text-black'}`}
          style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700 }}
        >
          tenghuey.dev
        </div>
        <div className="flex items-center gap-3">
          {items.map((item) => {
            const isActive = activeTab === item.url

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.url)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  `${isDark ? 'text-white hover:text-white/50' : 'text-foreground/80 hover:text-primary'}`,
                  isActive && `${isDark ? 'bg-muted/10 text-white' : 'bg-muted text-primary'}`,
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  {item.icon}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-20"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full`}>
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm  -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
