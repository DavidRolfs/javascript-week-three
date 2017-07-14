import { JavascriptWeekThreePage } from './app.po';

describe('javascript-week-three App', () => {
  let page: JavascriptWeekThreePage;

  beforeEach(() => {
    page = new JavascriptWeekThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
