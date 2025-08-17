import { DividerCloud } from "./DividerCloud"
import Footer from "./Footer"
import { SiSpotify } from "react-icons/si"

const playlists = [
    {
        description: "Good finds from Discover Weekly.",
        src: "https://open.spotify.com/embed/playlist/5gCF3LycCjN77iZhic9dqS?utm_source=generator"
    },
    {
        description: "Prime days, takes me back during my college years.",
        src: "https://open.spotify.com/embed/playlist/70qBQCCFUTFX3eOgo713Wu?utm_source=generator"
    },
    {
        description: "Noise cancel head phones on, high on caffeine, and a boat loads of tasks.",
        src: "https://open.spotify.com/embed/playlist/36tB4K5GrFT0Zpel8plsdr?utm_source=generator"
    },
    {
        description: "Monotony vibe, that monday blues that you get at the start of the week.",
        src: "https://open.spotify.com/embed/playlist/02P767RV5qsF57lWe7mGQM?utm_source=generator"
    },
    {
        description: "I see myself as the main character while imagining scenarios in my head.",
        src: "https://open.spotify.com/embed/playlist/4K8rK24TnY7ndmvpEfoWVt?utm_source=generator"
    },
    {
        description: "If I feel like listening to a full band or instruments.",
        src: "https://open.spotify.com/embed/playlist/6D2K4eqxW7UI4KpnPf8UBD?utm_source=generator"
    },
    {
        description: "Had an episode where I felt everything was pointless.",
        src: "https://open.spotify.com/embed/playlist/23jTk28yUL2yxKVX5bSek6?utm_source=generator"
    },
    {
        description: "I know, I have a playlist for this.",
        src: "https://open.spotify.com/embed/playlist/4fE5wRAu3I8QBjW3gX9V0Q?utm_source=generator"
    }
]

export const SectionPlaylists = () => {
    return (
        <div
            className="
                w-[95vw] max-w-3xl mx-auto
                backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl
                p-8 sm:p-10
                max-h-[calc(100vh-8rem)] overflow-auto scrollbar-hide
            "
        >
            <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2 border-black/10 w-fit">Playlists</h2>
            <p className="text-lg mb-4">
                A collection of my favorite artists and playlists that I personally curated. I always look forward to the Spotify Wrapped every year, it&#39;s like a time capsule of how my year went. You can tell a lot about a person based on the music they listen to, please be nice about it 🤭
            </p>
            <DividerCloud />
            <div className="overflow-x-auto flex flex-col gap-8">
                {
                    playlists.map((playlist, i) => (
                        <div key={i}>
                            <p className="text-base mb-2">
                                {playlist.description}
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="rounded-[12px] overflow-hidden shadow">
                                    <iframe
                                        data-testid="embed-iframe"
                                        style={{ borderRadius: '12px' }}
                                        src={playlist.src}
                                        width="100%"
                                        height="152"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex flex-col items-center mt-8 mb-4">
                <SiSpotify size={32} className="mb-2" />
                <a
                    href="https://open.spotify.com/user/12167261190?si=38243196f8eb4d53"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-center text-lg"
                    aria-label="Visit my Spotify profile"
                >
                    There&#39;s a lot more! I don&#39;t want to flood this,<br />so you can visit my Spotify profile.
                </a>
            </div>
            <Footer />
        </div>
    )
}