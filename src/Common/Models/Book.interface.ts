export interface Book{
    id: string;
    title: string;
    subtitle: string;
    authors: string[];
    image: string;
    shelf?: 'currentlyReading' | 'wantToRead' | 'read' | 'none';
    mainShelf?: 'currentlyReading' | 'wantToRead' | 'read' | 'none';
    industryIdentifiers: string[];
}