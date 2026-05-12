// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

const readingList = document.querySelector("#reading-list");

books.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <img src="${book.bookCoverImage}" alt="${book.title} cover">
    <p>${book.alreadyRead ? "Already read" : "Not read yet"}</p>
  `;
  readingList.appendChild(listItem);
});
