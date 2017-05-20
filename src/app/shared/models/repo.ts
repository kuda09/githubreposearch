import {Author} from "./author";

export interface Repo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    created_at: string;
    stargazers_count?: number;
    pushed_at: string;
    updated_at: string;
    html_url: string;
    homepage: string;
    language: string;
    clone_url: string;
    ssh_url: string;
    fork: boolean;
    owner: Author;
    forks: number;
    has_issues: boolean;
    open_issues: number;
    score?: number;
    size: number;
    subscribers_count?: number;
    issues_url: string;
}

export interface Stats {
    forks: number;
    open_issues: number;
    score?: number;
    size: number;
    subscribers_count?: number;
}