import { TccManagerAppPage } from './app.po';

describe('tcc-manager-app App', function() {
  let page: TccManagerAppPage;

  beforeEach(() => {
    page = new TccManagerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
