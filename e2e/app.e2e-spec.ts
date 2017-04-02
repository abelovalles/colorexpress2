import { Colorexpress3Page } from './app.po';

describe('colorexpress3 App', () => {
  let page: Colorexpress3Page;

  beforeEach(() => {
    page = new Colorexpress3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
