import { Angular2LiveCodingPage } from './app.po';

describe('angular2-live-coding App', function() {
  let page: Angular2LiveCodingPage;

  beforeEach(() => {
    page = new Angular2LiveCodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
