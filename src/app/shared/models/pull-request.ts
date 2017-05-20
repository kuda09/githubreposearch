import {Author} from "./author";

export interface PullRequest {
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
    created_at: string;
    updated_at: string;
    closed_at: string;
    body: string;
}
