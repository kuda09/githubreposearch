import {Author} from "./author";

export interface Issue {
    id: number;
    html_url: string;
    number: number;
    title: string;

    user: Author;
    state: string;
    locked: boolean;
    assignee: Author;
    assignees: Author[];
    milestone: Object;
    labels: IIssueLabel[];
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string;
    body: string;
}

export interface IIssueLabel {
    id: number;
    url: string;
    name: string;
    color: string;
}