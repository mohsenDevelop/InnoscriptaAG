export interface Magazine {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface Article {
    author: null | string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: null | string;
}

export interface Source {
    id: null | string;
    name: string;
}

export type MagazineParams = {
    page: number;
    pageSize: number
}