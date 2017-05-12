import {IAuthor} from "./author";

export interface IIssue {
    id: number;
    html_url: string;
    number: number;
    title: string;

    user: IAuthor;
    state: string;
    locked: boolean;
    assignee: IAuthor;
    assignees: IAuthor[];
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