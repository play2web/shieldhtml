import { ShieldSoftwarePage } from './app.po';

describe('shield-software App', () => {
  let page: ShieldSoftwarePage;

  beforeEach(() => {
    page = new ShieldSoftwarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
