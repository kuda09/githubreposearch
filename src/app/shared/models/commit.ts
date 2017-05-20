import {Author} from "./author";

export interface Commit {
    sha: string;
    commit: {
        message: string;
        comment_count: number;
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
    };
    html_url: string;
    url: string;
    author?: Author;
    committer: Author;

}