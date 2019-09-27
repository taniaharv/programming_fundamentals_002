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

    test("returns true when a book is found by title irrespective of case (all lower)", () => {
      expect(catalogueService.checkBook("great expectations")).toBe(true);
    });

    test("returns true when a book is found by title irrespective of case (mixed case)", () => {
      expect(catalogueService.checkBook("greAt expEctations")).toBe(true);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns 3 when title contains assassin", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });

    test("returns true when title contains assassin irrespective of case", () => {
      expect(catalogueService.checkBook("aSSassIn")).toBe(true);
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

    test("it returns an array of Charles Dickens books irrespective of case", () => {
      const actual = catalogueService.getBooksByAuthor("charLes DICkens");
      const expected = ["A Tale of Two Cities", "Oliver Twist", "Great Expectations"];
      expect(actual).toEqual(expected)
    });

    test("it returns an array of Charles Dickens, Charles Darwin & Charlotte Perkins books", () => {
      const actual = catalogueService.getBooksByAuthor("Charl");
      const expected = ["The Yellow Wallpaper", "A Tale of Two Cities", "Oliver Twist", "Great Expectations", "The Origin of Species"];
      expect(actual).toEqual(expected)
    });

    test("it returns an empty array if author not found", () => {
      const actual = catalogueService.getBooksByAuthor("Enid Blyton");
      const expected = [];
      expect(actual).toEqual(expected)
    });
  });

  describe("catalogueService.getStockCount", () => {
    test("it returns a count of 9 for Between the Assassinations", () => {
      expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
    });

    test("it returns a count of 0 for Dracula", () => {
      expect(catalogueService.getStockCount("Dracula")).toBe(0);
    });

    test("it returns a Not in our catalogue message when the book is not in the catalogue", () => {
      expect(catalogueService.getStockCount("Famous Five go Camping")).toBe("Not in our catalogue");
    });

    test("it returns a count of 9 for Between the Assassinations irrespective of case", () => {
      expect(catalogueService.getStockCount("betWEen The assassinationS")).toBe(9);
    });
  });
  
  describe.only("catalogueService.stockReview", () => {
    test("it returns Not in Stock for Dracula which has 0 quantity", () => {
      expect(catalogueService.stockReview("Dracula")).toBe("Not in Stock");
    });

    test("it returns Not in Stock for Dracula which has 0 quantity irrespective of case", () => {
      expect(catalogueService.stockReview("draCUla")).toBe("Not in Stock");
    });

    test("it returns Low Stock for Great Expectations which has a quantity of 1", () => {
      expect(catalogueService.stockReview("Great Expectations")).toBe("Low Stock");
    });

    test("it returns Medium Stock for Everything I Never Told You which has a quantity of 6", () => {
      expect(catalogueService.stockReview("Everything I Never Told You")).toBe("Medium Stock");
    });

    test("it returns Medium Stock for The Catcher in the Rye which has a quantity of 10", () => {
      expect(catalogueService.stockReview("The Catcher in the Rye")).toBe("Medium Stock");
    });

    test("it returns High Stock for Bring Up The Bodies which has a quantity of 10", () => {
      expect(catalogueService.stockReview("Bring Up The Bodies")).toBe("High Stock");
    });

    test("it returns a Not in our catalogue message when the book is not in the catalogue", () => {
      expect(catalogueService.stockReview("Famous Five go Camping")).toBe("Not in our catalogue");
    });
  });
})