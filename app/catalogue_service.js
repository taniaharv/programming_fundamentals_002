// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

// checkBook function using while loop

// function checkBook(title) {
//   if (!title) throw new Error("Please provide a title");

//   let result = false
//   let i = 0;
//   while (i < catalogue.length) {
//    const book = catalogue[i];
//    let bookLC = book.toLowerCase();
//    let titleLC = title.toLowerCase();

//    if (bookLC.includes(titleLC)) {
//       result = true

//    }
//    i++; 
//    }
//    return result
//   } 

// checkBook function using FOR loop

function checkBook(title) {
  if (!title) throw new Error("Please provide a title");

  for (let i = 0; i < catalogue.length; i = i + 1) {
    const book = catalogue[i];
    let bookLC = book.toLowerCase();
    let titleLC = title.toLowerCase();

    if (bookLC.includes(titleLC)) {
      return true;
    }
  }
  return false;
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let count = 0;
  let i = 0;
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookLS = book.toLowerCase();
    let keywordLS = keyword.toLowerCase();

    if (bookLS.includes(keywordLS)) {
      count = count + 1;
    }
    i++;

  }
  return count;
}

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let i = 0;
  let searchResults = []
  let splitBook
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookLS = book.toLowerCase();
    let authorLS = author.toLowerCase();

    if (bookLS.includes(authorLS)) {
      splitBook = book.split(" by ");
      searchResults.push(splitBook[0]);
    }
    i++;
  }
  return searchResults
}


function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let i = 0;
  let searchResults = []
  let splitBook
  let splitQty
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookLS = book.toLowerCase();
    let titleLS = title.toLowerCase();

    if (bookLS.includes(titleLS)) {
      splitBook = book.split("(");
      searchResults.push(splitBook[0]);
      searchResults = splitBook[1]
      splitQty = searchResults.split(")");
    }
    i++;
  } if (typeof searchResults[0] === "undefined") return "Not in our catalogue";
  return Number(splitQty[0]);
}

// stockReview using if ... else

// function stockReview(title) {
//   if (!title) throw new Error("Please provide a title");
//     let i = 0;
//     let searchResults = [] 
//     let splitBook
//     let splitQty
//     while (i < catalogue.length) {
//      const book = catalogue[i];
//      let bookLS = book.toLowerCase();
//      let titleLS = title.toLowerCase();

//      if (bookLS.includes(titleLS)) { 
//        splitBook = book.split("(");
//        searchResults.push(splitBook[0]);
//        searchResults = splitBook[1]
//        splitQty = searchResults.split(")");
//       }
//     i++;
//     } if (typeof searchResults[0] === "undefined") return "Not in our catalogue";
//     if (Number(splitQty[0]) === 0) {
//       return "Not in Stock";
//     } else if (Number(splitQty[0]) > 0 && Number(splitQty[0])<6) {
//       return "Low Stock";
//       } else if (Number(splitQty[0]) > 5 && Number(splitQty[0])<11) {
//       return "Medium Stock";
//       } else
//       return "High Stock";
//   }

// stockReview using switch

function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  let i = 0;
  let searchResults = []
  let splitBook
  let splitQty
  let qty = 0
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookLS = book.toLowerCase();
    let titleLS = title.toLowerCase();

    if (bookLS.includes(titleLS)) {
      splitBook = book.split("(");
      searchResults.push(splitBook[0]);
      searchResults = splitBook[1]
      splitQty = searchResults.split(")");
    }
    i++;
  } if (typeof searchResults[0] === "undefined") return "Not in our catalogue";
  qty = Number(splitQty[0]);
  switch (qty) {
    case 0:
      return "Not in Stock";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Low Stock";
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return "Medium Stock";
      break;
    default:
      return "High Stock";
      break;
  }
}





module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
