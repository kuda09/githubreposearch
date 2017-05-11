import { GithubreposearchPage } from './app.po';

describe('githubreposearch App', () => {
  let page: GithubreposearchPage;

  beforeEach(() => {
    page = new GithubreposearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
