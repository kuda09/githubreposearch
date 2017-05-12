
import {IAuthor} from "./author";

export interface IPullRequest {
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
    created_at: string;
    updated_at: string;
    closed_at: string;
    body: string;
}
