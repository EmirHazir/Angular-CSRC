import { AngularComplatePage } from './app.po';

describe('angular-complate App', () => {
  let page: AngularComplatePage;

  beforeEach(() => {
    page = new AngularComplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
