import { GithubreposearchPage } from './app.po';

describe('Github Repo Search App', () => {
  let page: GithubreposearchPage;

  beforeEach(() => {
    page = new GithubreposearchPage();
  });

  it('should display header', () => {
    page.navigateTo();
    expect(page.getHeader().isPresent()).toBe(true);
  });
});
