// app/api/ol-books-combined/route.ts
import { NextResponse } from 'next/server';

interface ReadingLogEntry {
    work: Record<string, unknown>;
    [key: string]: unknown;
}

interface BooksResponse {
    reading_log_entries: ReadingLogEntry[];
    [key: string]: unknown;
}

interface CombinedResponse {
    alreadyread: Record<string, unknown>[];
    currentlyreading: Record<string, unknown>[];
}

const ALREADY_READ_URL =
    'https://openlibrary.org/people/tenghuey/books/already-read.json';
const CURRENTLY_READING_URL =
    'https://openlibrary.org/people/tenghuey/books/currently-reading.json';

// Helper to generate the cover URL
function getCoverUrl(
    work: Record<string, unknown>,
    size: 'S' | 'M' | 'L' = 'M'
): string | null {
    if (work.cover_id) {
        return `https://covers.openlibrary.org/b/id/${work.cover_id}-${size}.jpg`;
    }
    if (work.cover_edition_key) {
        return `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-${size}.jpg`;
    }
    return null;
}

export async function GET(): Promise<NextResponse> {
    try {
        const [alreadyReadRes, currentlyReadingRes] = await Promise.all([
            fetch(ALREADY_READ_URL),
            fetch(CURRENTLY_READING_URL),
        ]);

        if (!alreadyReadRes.ok || !currentlyReadingRes.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch OpenLibrary data.' },
                { status: 502 }
            );
        }

        const alreadyReadData: BooksResponse = await alreadyReadRes.json();
        const currentlyReadingData: BooksResponse = await currentlyReadingRes.json();

        const mapWithCover = (entries: ReadingLogEntry[] = []) =>
            entries.map(entry => {
                const work = { ...entry.work };
                work.book_cover = getCoverUrl(work, 'M');
                return work;
            });

        const response: CombinedResponse = {
            alreadyread: Array.isArray(alreadyReadData.reading_log_entries)
                ? mapWithCover(alreadyReadData.reading_log_entries)
                : [],
            currentlyreading: Array.isArray(currentlyReadingData.reading_log_entries)
                ? mapWithCover(currentlyReadingData.reading_log_entries)
                : [],
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}