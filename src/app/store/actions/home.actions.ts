import {Action} from '@ngrx/store';
import {type} from '../../shared/utils';
import {Response} from "@angular/http";
import {Repo} from "../../shared/models/repo";


export const ActionTypes = {
    TAGS: type('Tags'),
    TAGS_COMPLETE: type('Tags Complete'),
    LOAD_TRENDING: type('Trending'),
    LOAD_TRENDING_COMPLETE: type('Trending Complete')
}


export class TagsAction implements Action {
    type: string = ActionTypes.TAGS;

    constructor(public payload?: any) {
    }
}

export class TagsCompleteAction implements Action {
    type: string = ActionTypes.TAGS_COMPLETE;

    constructor(public payload: Repo[]) {
    }
}


export class LoadTrendingAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING;

    constructor(public payload?: any) {
    }
}

export class LoadTrendingCompleteAction implements Action {
    type: string = ActionTypes.LOAD_TRENDING_COMPLETE;

    constructor(public payload: Repo[]) {
    }
}


export type Actions = TagsAction | TagsCompleteAction  | LoadTrendingAction | LoadTrendingCompleteAction;