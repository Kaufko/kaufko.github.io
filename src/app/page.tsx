'use client';
// next/dynamic skips SSR for this component
import dynamic from 'next/dynamic'; // Add this import
import { lazy ,Suspense } from "react";

const RenderOnViewportEntry = dynamic(() => import('@/app/components/RenderOnViewportEntry'), { 
  ssr: false 
});

const HomePage = lazy(() => import("@/app/home/page"));
const AboutPage = lazy(() => import("@/app/about/page"));
const ProjectsPage = lazy(() => import("@/app/projects/page"));
const ContactPage = lazy(() => import("@/app/contact/page"));
import Loading from "@/app/loading";

interface ROVEOptionsType {
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

const scrollROVEOptions: ROVEOptionsType = {
  threshold: 0.01,
  className: "snap-start h-screen"
};

export default function Home() {
  return (
    <main
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      <section className="snap-start h-screen">
        <RenderOnViewportEntry {...scrollROVEOptions}>
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </RenderOnViewportEntry>
      </section>

      <section className="snap-start h-screen">
        <RenderOnViewportEntry {...scrollROVEOptions}>
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        </RenderOnViewportEntry>
      </section>

      <section className="snap-start h-screen">
        <RenderOnViewportEntry {...scrollROVEOptions}>
          <Suspense fallback={<Loading />}>
            <ProjectsPage />
          </Suspense>
        </RenderOnViewportEntry>
      </section>

      <section className="snap-start h-screen">
        <RenderOnViewportEntry {...scrollROVEOptions}>
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        </RenderOnViewportEntry>
      </section>
    </main>
  );
}
