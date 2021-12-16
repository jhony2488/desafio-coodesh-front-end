
export interface HeaderInterface {
    content: string;
    color: string;
    fontSize: string;
    fontWeight: string;
    textAlign: string;
    type?: 'Paragraphs' | 'Date' | 'ItemNewsSite';
    backgroundColor: string;
}

export interface HeaderStyleInterface {
    color: string;
    fontSize: string;
    fontWeight: string;
    title: string;
    textAlign: string;
}

export interface HeaderWrapperInterface {
    title: string;
    backgroundColor: string;
    fontSize: string;
}

export interface HeaderWrapperStyleInterface {
    title: string;
    backgroundColor: string;
    fontSize: string;
}
