import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface WhitepaperLayoutProps {
  title: string
  subtitle: string
  backgroundImage: string
  pdfPath: string
}

export default function WhitepaperLayout({
  title,
  subtitle,
  backgroundImage,
  pdfPath,
}: WhitepaperLayoutProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section mit Hintergrundbild */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pb-32 lg:pt-40 lg:pb-40 min-h-[60vh] lg:min-h-[70vh]">
        {/* Hintergrundbild */}
        <div className="absolute inset-0 -z-20">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          />
          <div className="hero-gradient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* PDF Download Section mit Feuer-Rahmen */}
      <section className="relative pt-24 pb-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              href={pdfPath}
              target="_blank"
              className="glare-card border-glow rounded-3xl py-12 md:py-16 px-8 md:px-12 space-y-6 relative max-w-2xl w-full group cursor-pointer block transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10 text-center">
                <div className="inline-block mb-4 pdf-animation">
                  <Image
                    src="/img/whitepapers_grid/pdf.png"
                    alt="PDF"
                    width={150}
                    height={150}
                    className="mx-auto object-contain"
                    style={{ width: "150px", height: "auto", maxWidth: "150px" }}
                  />
                </div>

                <h2 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-white font-semibold mb-4">
                  {title}
                </h2>

                <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#93c5fd] group-hover:gap-3 transition-all mt-4">
                  <span>Click to download PDF</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
