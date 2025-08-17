"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      defaults: '2025-05-24',
      capture_exceptions: true, // This enables capturing exceptions using Error Tracking
      debug: process.env.NODE_ENV === "development",
    })

    // Capture initial pageview with hash fragment
    posthog.capture("pageview_with_hash", {
      url: window.location.href,
      fragment: window.location.hash || null,
    })

    // Capture on hash change (e.g. #about -> #contact)
    const onHashChange = () => {
      posthog.capture("hash_change", {
        url: window.location.href,
        fragment: window.location.hash || null,
      })
    }

    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}