"use client"

import { useState } from "react"

const allocations = [
  { name: "Public Sale", percentage: 40, color: "#5B6CFF" },
  { name: "Ecosystem Fund", percentage: 25, color: "#818CF8" },
  { name: "Team & Advisors", percentage: 15, color: "#A5B4FC" },
  { name: "Treasury", percentage: 12, color: "#C7D2FE" },
  { name: "Liquidity", percentage: 8, color: "#E0E7FF" },
]

export default function TokenomicsChart() {
  const totalSupply = 21000000
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)
  let cumulativePercentage = 0

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Chart */}
      <div className="relative mx-auto w-full max-w-[min(100%,450px)] overflow-visible px-4 py-10 sm:py-12 md:py-16">
        <div className="relative mx-auto aspect-square w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%]">
          <svg viewBox="-5 -5 110 110" className="h-full w-full -rotate-90">
            {allocations.map((allocation) => {
              const startPercentage = cumulativePercentage
              cumulativePercentage += allocation.percentage
              const circumference = 2 * Math.PI * 38
              const strokeDasharray = `${(allocation.percentage / 100) * circumference} ${circumference}`
              const strokeDashoffset = -(startPercentage / 100) * circumference
              
              const isHovered = hoveredSegment === allocation.name
              const strokeWidth = isHovered ? 24 : 20
              const opacity = hoveredSegment && !isHovered ? 0.5 : 1

              return (
                <circle
                  key={allocation.name}
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke={allocation.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  opacity={opacity}
                  onMouseEnter={() => setHoveredSegment(allocation.name)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  className={`transition-all duration-300 ease-out cursor-pointer ${
                    isHovered ? "scale-[1.02] md:scale-105" : ""
                  }`}
                  style={{
                    transformOrigin: "50px 50px",
                  }}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold">21M</span>
            <span className="text-xs sm:text-sm text-muted-foreground">Total Supply</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid gap-4 sm:grid-cols-2">
        {allocations.map((allocation) => {
          const isHovered = hoveredSegment === allocation.name
          return (
            <div
              key={allocation.name}
              className={`flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 cursor-pointer ${
                isHovered ? "border-accent/50 bg-accent/5 sm:scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredSegment(allocation.name)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <div
                className="h-4 w-4 rounded-full transition-transform duration-300"
                style={{
                  backgroundColor: allocation.color,
                  transform: isHovered ? "scale(1.5)" : "scale(1)",
                }}
              />
              <div className="flex-1">
                <div className="font-medium">{allocation.name}</div>
                <div className="text-sm text-muted-foreground">
                  {((allocation.percentage / 100) * totalSupply).toLocaleString()} XXX
                </div>
              </div>
              <div className="text-lg font-semibold text-accent">{allocation.percentage}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
