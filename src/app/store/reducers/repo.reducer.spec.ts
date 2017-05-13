
import {IRepo} from "../../common/models/repo";
import {repoTestData} from "../../../tests/fixtures/repo";
import {repoCommitsTestData} from "../../../tests/fixtures/repo-commits";
import {repoReducer, repoInitialState} from "./repo.reducer";
import {LoadAction, LoadCommitsCompleteAction} from "../actions/repo.actions";
describe('reducer: repo', ()  => {

    const repo = <IRepo>repoTestData;
    const commits = [repoCommitsTestData[0], repoCommitsTestData[1], repoCommitsTestData[2]];

    it('should produce state for repos', () => {

        const newState = repoReducer(repoInitialState, new LoadAction(repoTestData));
        expect(newState.entity).toBe(repo);
    });


    it('should produce state for LOAD_COMMITS_COMPLETE', () => {

        const newState = repoReducer(repoInitialState, new LoadCommitsCompleteAction(commits));
    })






})