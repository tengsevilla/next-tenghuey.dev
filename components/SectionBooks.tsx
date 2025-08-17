'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from './Footer';

type Book = {
    title?: string;
    author_names?: string[];
    book_cover?: string;
    [key: string]: unknown;
};

interface BooksData {
    alreadyread: Book[];
    currentlyreading: Book[];
}


export const SectionBooks = () => {
    const [data, setData] = React.useState<BooksData | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    // Scroll refs
    const alreadyReadRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const currentlyReadingRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    React.useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch('/api/books');
                if (!res.ok) {
                    throw new Error('Failed to fetch books');
                }
                const json: BooksData = await res.json();
                setData(json);
            } catch {
                setError('Error fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Scroll logic
    function handleScroll(
        ref: React.RefObject<HTMLDivElement>,
        direction: 'left' | 'right'
    ) {
        if (!ref.current) return;
        const scrollAmount = ref.current.offsetWidth * 0.8; // Scroll by 80% of container width
        ref.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    }

    return (
        <div
            className="
                        w-[95vw] max-w-3xl mx-auto
                        backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl
                        p-8 sm:p-10
                        max-h-[calc(100vh-8rem)] overflow-auto scrollbar-hide
                    "
        >
            <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2 border-black/10 w-fit">Books</h2>
            <p className="text-lg mb-4">
                Just a collection of books that I read, or currently reading. It&#39;s under development for now since I need to locate my old books and add them in OpenLibrary.org. It&#39;s a really neat API that provides access to a vast database of book information.
            </p>
            <p className="text-lg mb-8">
                I always dream of a library of my own full of books that I&#39;ve read, so for now a digital library will do. I&#39;m excited to fill this one up moving forward.
            </p>
            <div className="space-y-8">
                {loading && <LoadingSpinner />}
                {error && <div className="text-red-600">{error}</div>}

                {!!data && (
                    <div className="grid grid-cols-1 gap-8">
                        {/* Currently Reading: 1 row x horizontal scroll */}
                        <div className="p-4 backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-lg">Currently Reading <span className='text-md'>({data.currentlyreading.length})</span></h2>
                                <div className="flex gap-2">
                                    <button
                                        aria-label="Scroll left"
                                        type="button"
                                        onClick={() => handleScroll(currentlyReadingRef, 'left')}
                                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft size={16} />
                                    </button>
                                    <button
                                        aria-label="Scroll right"
                                        type="button"
                                        onClick={() => handleScroll(currentlyReadingRef, 'right')}
                                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            {data.currentlyreading.length === 0 ? (
                                <div className="text-muted-foreground">No books found.</div>
                            ) : (
                                <div ref={currentlyReadingRef} className="overflow-x-auto pb-2 scrollbar-hide" style={{ maxWidth: '100%' }}>
                                    <div className="flex gap-4 min-w-max">
                                        {data.currentlyreading.map((book, i) => (
                                            <div
                                                key={i}
                                                className="flex flex-col items-center min-w-[120px] max-w-[140px] mx-1"
                                            >
                                                {book.book_cover ? (
                                                    <Image
                                                        src={book.book_cover}
                                                        alt={book.title || 'Book cover'}
                                                        width={150}
                                                        height={150}
                                                        className="rounded object-cover bg-muted"
                                                        loading="lazy"
                                                        unoptimized
                                                    />
                                                ) : (
                                                    <div className="w-20 h-30 bg-muted rounded" />
                                                )}
                                                <div className="mt-2 text-xs font-medium text-center line-clamp-2">
                                                    {book.title || (
                                                        <span>Untitled</span>
                                                    )}
                                                </div>
                                                <div className="text-[10px] text-center line-clamp-1">
                                                    {(book.author_names as string[])?.join(', ') || ''}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Already Read: 3 rows x horizontal scroll */}
                        <div className="p-4 backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl ">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-lg">Already Read <span className='text-md'>({data.alreadyread.length})</span></h2>
                                <div className="flex gap-2">
                                    <button
                                        aria-label="Scroll left"
                                        type="button"
                                        onClick={() => handleScroll(alreadyReadRef, 'left')}
                                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft size={16} />
                                    </button>
                                    <button
                                        aria-label="Scroll right"
                                        type="button"
                                        onClick={() => handleScroll(alreadyReadRef, 'right')}
                                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            {data.alreadyread.length === 0 ? (
                                <div>No books found.</div>
                            ) : (
                                <div ref={alreadyReadRef} className="overflow-x-auto pb-2 scrollbar-hide" style={{ maxWidth: '100%' }}>
                                    <div
                                        className="grid grid-rows-3 auto-cols-min gap-4 min-w-max"
                                        style={{ gridAutoFlow: 'column' }}
                                    >
                                        {data.alreadyread.map((book, i) => (
                                            <div
                                                key={i}
                                                className="flex flex-col items-center min-w-[120px] max-w-[140px] mx-1"
                                            >
                                                {book.book_cover ? (
                                                    <Image
                                                        src={book.book_cover}
                                                        alt={book.title || 'Book cover'}
                                                        width={150}
                                                        height={150}
                                                        className="rounded object-cover bg-muted"
                                                        loading="lazy"
                                                        unoptimized
                                                    />
                                                ) : (
                                                    <div className="w-20 h-30 bg-muted rounded" />
                                                )}
                                                <div className="mt-2 text-xs font-medium text-center line-clamp-2">
                                                    {book.title || (
                                                        <span>Untitled</span>
                                                    )}
                                                </div>
                                                <div className="text-[10px] text-center line-clamp-1">
                                                    {(book.author_names as string[])?.join(', ') || ''}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

function LoadingSpinner(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12 bg-transparent">
            <div className="flex items-end gap-2 h-16">
                {/* Book 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-12 rounded-sm bg-blue-200 shadow-lg animate-bounce [animation-delay:0s]" />
                    <div className="w-4 h-2 bg-blue-200 opacity-40 blur-[1px] mt-1 rounded-b-full" />
                </div>
                {/* Book 2 */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-10 rounded-sm bg-purple-200 shadow-lg animate-bounce [animation-delay:0.15s]" />
                    <div className="w-4 h-2 bg-purple-200 opacity-40 blur-[1px] mt-1 rounded-b-full" />
                </div>
                {/* Book 3 */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-14 rounded-sm bg-emerald-200 shadow-lg animate-bounce [animation-delay:0.3s]" />
                    <div className="w-4 h-2 bg-emerald-200 opacity-40 blur-[1px] mt-1 rounded-b-full" />
                </div>
                {/* Book 4 */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-11 rounded-sm bg-orange-200 shadow-lg animate-bounce [animation-delay:0.45s]" />
                    <div className="w-4 h-2 bg-orange-200 opacity-40 blur-[1px] mt-1 rounded-b-full" />
                </div>
                {/* Book 5 */}
                <div className="flex flex-col items-center">
                    <div className="w-4 h-13 rounded-sm bg-gray-200 shadow-lg animate-bounce [animation-delay:0.6s]" />
                    <div className="w-4 h-2 bg-gray-200 opacity-40 blur-[1px] mt-1 rounded-b-full" />
                </div>
            </div>
            <p className="mt-6 text-sm text-center">Loading my bookself...</p>
            <style jsx>{`
                .animate-bounce {
                animation-name: bounce-vertical;
                animation-duration: 1.3s;
                animation-iteration-count: infinite;
                animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
                }
                @keyframes bounce-vertical {
                0%, 100% { transform: translateY(0); }
                20% { transform: translateY(-16%); }
                40% { transform: translateY(-60%); }
                60% { transform: translateY(-16%); }
                80% { transform: translateY(0); }
                }
            `}
            </style>
        </div>
    );

}