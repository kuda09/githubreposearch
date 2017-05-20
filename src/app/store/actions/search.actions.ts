import { Action } from '@ngrx/store';
import {type} from '../../shared/utils';
import {Response} from "@angular/http";
import {Repo} from "../../shared/models/repo";


export const ActionTypes = {
    SEARCH: type('Search'),
    SEARCH_COMPLETE: type('Search Complete'),
    SEARCH_ERROR: type('Search Error')
}


 export class SearchAction implements Action {
     type: string = ActionTypes.SEARCH;
     constructor(public payload: string) {}
 }

export class SearchCompleteAction implements Action {
    type: string = ActionTypes.SEARCH_COMPLETE;

    constructor(public payload: Repo[]) {
    }
}

export class SearchCompleteError implements Action {
    type: string = ActionTypes.SEARCH_ERROR;
    constructor(public payload: Response) {}
}


export type Actions = SearchAction | SearchCompleteAction | SearchCompleteError;