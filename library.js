/**
 * Title: Book Library 
 * Author: Yash Divecha
 * 
 */

function BookLibrary() {
	this.booksArray = new Array();
}

// prototype method of creating methods avoid the following drawbacks:
// 1. naming conflicts.
// 2. method recreation every time you create a new object.
BookLibrary.prototype.addBooks = function() {
	for (var i = 0; i < arguments.length; i++)
		this.booksArray.push(arguments[i]);
};

BookLibrary.prototype.printAllBooks = function() {
	for (var i = 0; i < this.booksArray.length; i++)
		console.log(this.booksArray[i]);
}

BookLibrary.prototype.searchByISBN = function(isbnIn) {
	var isBookPresent = false;
	for (var i = 0; i < this.booksArray.length; i++) {
		if (this.booksArray[i].isbn === isbnIn) {
			console.log(this.booksArray[i]);
			isBookPresent = true;
			break;
		}
	}
	if (!isBookPresent)
		console.log("No Match Found");
}

BookLibrary.prototype.searchByTitle = function(titleIn) {
	var isBookPresent = false;
	for (var i = 0; i < this.booksArray.length; i++) {
		if (this.booksArray[i].title.toLowerCase().indexOf(
				titleIn.toLowerCase()) !== -1) {
			console.log(this.booksArray[i]);
			isBookPresent = true;
			break;
		}
	}
	if (!isBookPresent)
		console.log("No Match Found");
}

function Book(isbn, title, author, publishYear) {
	this.isbn = isbn;
	this.title = title;
	this.author = author;
	this.publishYear = publishYear;
	this.toString = function() {
		return ("[ISBN: " + this.isbn + " \tTitle: " + this.title
				+ " \tAuthor: " + this.author + " \tOriginally_Published: "
				+ this.publishYear + "]")
	}
}

// Creation of Objects (Books)
var programmer = new Book('9787505397194', 'The Pragmatic Programmer',
		'Dave Thomas', '1999');
var cProgramming = new Book('9788679912435', 'The C Programming Language',
		'Dennis Ritchie', '1975');
var designPattern = new Book('9780596007126', 'Head First Design Patterns',
		'Kathy Sierra', '2004');
var artComputerProgramming = new Book('9788429126648',
		'The Art of Computer Programming', 'Donald Knuth', '1968');
var cPlusPlus = new Book('9788865184486', 'The C++ Programming Language',
		'Bjarne Stroustrup', '1985');
var algorithms = new Book('9780262531962', 'Introduction to Algorithms',
		'Thomas H. Cormen', '1990');
var javascript = new Book('9788184045222', 'JavaScript: The Good Parts',
		'Douglas Crockford', '2008');
var java = new Book('9780071606318', 'Java: The Complete Reference',
		'Herbert Schildt', '1996');
var python = new Book('9788184048261', 'Learning Python', 'Mark Lutz', '1999');

// Create Library Object
var computerProgrammingLibrary = new BookLibrary();

// Adding Books to Library.
computerProgrammingLibrary
		.addBooks(programmer, cProgramming, designPattern,
				artComputerProgramming, cPlusPlus, algorithms, javascript,
				java, python);

// User can search by ISBN Number
// computerProgrammingLibrary.searchByISBN('9788184048261');

// User can search by Title
// computerProgrammingLibrary.searchByTitle('the');

// User can print all the books.
computerProgrammingLibrary.printAllBooks();