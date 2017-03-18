import { MemexchangePage } from './app.po';

describe('memexchange App', () => {
  let page: MemexchangePage;

  beforeEach(() => {
    page = new MemexchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
