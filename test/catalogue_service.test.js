const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });

    test("returns true when a book is found by title irrespective of case", () => {
      expect(catalogueService.checkBook("great expectations")).toBe(true);
    });

    test("returns true when a book is found by title irrespective of case", () => {
      expect(catalogueService.checkBook("greAt expEctations")).toBe(true);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns 3 when title contains assassin", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });

    test("returns 2 when title contains normal", () => {
      expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
    });

    test("returns 0 when title does not contain pineapple", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });

    test("returns 4 when title does contains 6", () => {
      expect(catalogueService.countBooksByKeyword("6")).toBe(2);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("it returns an array of Charles Dickens books", () => {
      const actual = catalogueService.getBooksByAuthor("Charles Dickens");
      const expected = ["A Tale of Two Cities", "Oliver Twist", "Great Expectations"];
      expect(actual).toEqual(expected)
    });
  });
})