// import { redirect } from 'next/navigation';

// export default function Home() {
//   redirect('/professional');
// }

"use client";
import { CloudSky } from "@/components/CloudSky";
import AnimatedFloatingNavbar from "@/components/FloatingNavbar";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionBooks } from "@/components/SectionBooks";
import { SectionHome } from "@/components/SectionHome";
import { SectionNotes } from "@/components/SectionNotes";
import { SectionPhotos } from "@/components/SectionPhotos";
import { SectionPlaylists } from "@/components/SectionPlaylists";
import { SectionProjects } from "@/components/SectionProjects";
import { useAnimateStore } from "@/lib/stores/animateStore";
import { useNavStore } from "@/lib/stores/navStore";

export default function Page() {
  const { stage } = useAnimateStore();
  const { nav } = useNavStore();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CloudSky />

      {/* Background quote - top left */}
      <div className="pointer-events-none select-none absolute top-0 left-0 z-0 p-8">
        <div className="text-white opacity-30 max-w-xs hidden sm:block">
          <p className="text-xs">I&#39;ve always dreamed of being a cloud —</p>
          <p className="text-xs">a soft wisp of breath above the world,</p>
          <p className="text-xs">adrift on winds that know no borders,</p>
          <p className="text-xs">unhurried, untouched,</p>
          <p className="text-xs">a quiet witness to the turning of the earth.</p>
        </div>
      </div>
      <AnimatedFloatingNavbar />
      <main
        className={`
                relative z-10 mt-24
                transition-all duration-700
                ${stage === "intro"
            ? "opacity-0 translate-y-8 pointer-events-none select-none"
            : stage === "animating"
              ? "opacity-50 blur-sm pointer-events-none select-none"
              : "opacity-100 translate-y-0 blur-0 pointer-events-auto"
          }
                `}
      >
        {
          nav === "home" && <SectionHome />
        }
        {
          nav === "projects" && <SectionProjects />
        }
        {
          nav === "about" && <SectionAbout />
        }
        {
          nav === "playlists" && <SectionPlaylists />
        }
        {
          nav === "books" && <SectionBooks />
        }
        {
          nav === "notes" && <SectionNotes />
        }
        {
          nav === "photos" && <SectionPhotos />
        }
      </main>
    </div>
  );
}
