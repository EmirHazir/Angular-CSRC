import { Odev2Page } from './app.po';

describe('odev2 App', () => {
  let page: Odev2Page;

  beforeEach(() => {
    page = new Odev2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
