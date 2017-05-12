import { Action } from '@ngrx/store';
import { type } from '../../common/utils';
import {Response} from "@angular/http";
import {IRepo} from "../../common/models/repo";


export const ActionTypes = {
    SEARCH: type('Search'),
    SEARCH_COMPLETE: type('Search Complete'),
    SEARCH_ERROR: type('Search Error'),
    LOAD_TRENDING: type('Trending'),
    LOAD_TRENDING_COMPLETE: type('Trending Complete'),
    SELECT: type('Select'),
    LOAD: type('Load'),
    LOAD_ERROR: type('Load Error')
}


 export class SearchAction implements Action {
     type: string = ActionTypes.SEARCH;
     constructor(public payload: string) {}
 }

export class SearchCompleteAction implements Action {
    type: string = ActionTypes.SEARCH_COMPLETE;
    constructor(public payload) {}
}

export class SearchCompleteError implements Action {
    type: string = ActionTypes.SEARCH_ERROR;
    constructor(public payload: Response) {}
}

export class LoadTrendingAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING;
    constructor(public payload?: any) {}
}

export class LoadTrendindCompleteAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING;
    constructor(public payload: IRepo[]) {}
}

export class LoadAction implements Action {
    type: string = ActionTypes.LOAD;
    constructor(public payload: IRepo) {}
}


export class LoadErrorAction implements Action {
    type: string = ActionTypes.LOAD_ERROR;
    constructor(public payload: IRepo) {}
}


export type Actions = SearchAction | SearchCompleteAction | SearchCompleteError | LoadTrendingAction | LoadTrendindCompleteAction | LoadAction | LoadErrorAction;