import Image from "next/image"

interface XcoinLogoProps {
  className?: string
  size?: number
}

export default function XcoinLogo({ className, size = 36 }: XcoinLogoProps) {
  return (
    <Image 
      src="/xcoin-logo.png" 
      alt="Xcoin Logo" 
      width={size} 
      height={size} 
      className={`${className} animate-spin-slow`}
    />
  )
}
