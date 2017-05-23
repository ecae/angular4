import { Angular4ServerPage } from './app.po';

describe('angular4-server App', () => {
  let page: Angular4ServerPage;

  beforeEach(() => {
    page = new Angular4ServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
