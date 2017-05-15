import { Action } from '@ngrx/store';
import { type } from '../../common/utils';
import {Response} from "@angular/http";
import {IRepo} from "../../common/models/repo";


export const ActionTypes = {
    SEARCH: type('Search'),
    SEARCH_COMPLETE: type('Search Complete'),
    SEARCH_ERROR: type('Search Error'),
    LOAD_TRENDING: type('Trending'),
    LOAD_TRENDING_COMPLETE: type('Trending Complete')
}


 export class SearchAction implements Action {
     type: string = ActionTypes.SEARCH;
     constructor(public payload: string) {}
 }

export class SearchCompleteAction implements Action {
    type: string = ActionTypes.SEARCH_COMPLETE;
    constructor(public payload: IRepo[]) {}
}

export class SearchCompleteError implements Action {
    type: string = ActionTypes.SEARCH_ERROR;
    constructor(public payload: Response) {}
}

export class LoadTrendingAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING;
    constructor(public payload?: any) {}
}

export class LoadTrendingCompleteAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING_COMPLETE;
    constructor(public payload: IRepo[]) {}
}



export type Actions = SearchAction | SearchCompleteAction | SearchCompleteError | LoadTrendingAction | LoadTrendingCompleteAction;