'use client'

import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import DETAILS from "@/DETAILS.json"

export default function NavCTAButton() {
  const pathname = usePathname()
  const isCourseRoute = pathname?.startsWith('/course')

  if (isCourseRoute) {
    return (
      <Button asChild>
        <a href={DETAILS.stripeUrl} target="_blank" rel="noopener noreferrer">
          GET INSTANT ACCESS
        </a>
      </Button>
    )
  }

  return (
    <Button size="sm" className="tracking-widest text-xs">
      Book Now
    </Button>
  )
}
