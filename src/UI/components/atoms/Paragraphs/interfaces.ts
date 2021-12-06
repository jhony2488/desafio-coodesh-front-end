export interface ParagraphsInterface {
    content: string;
    color: string;
    fontSize: string;
    fontWeight: string;
    textAlign: string;
    type?: 'Paragraphs' | 'Date' | 'ItemNewsSite';
    backgroundColor?: string;
    borderColor?: string;
}

export interface ParagraphsStyleInterface {
    color: string;
    fontSize: string;
    fontWeight: string;
    title: string;
    textAlign: string;
}

export interface DateDivStyleInterface {
    title: string;
    backgroundColor: string;
    fontSize: string;
    borderColor: string;
}
