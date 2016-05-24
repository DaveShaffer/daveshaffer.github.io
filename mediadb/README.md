# MEDIAdb
GA WDI Proj 2

### User Story
It was fairly easy to organize record albums.  They are all the same size and
are organized by alphabetically by artist.  If it was a sound track or
compilation, it was filed under "various artists," then alphabetical by title.
Magazines are usually the same size and organized chronologically.  Books were
usually divided by subject, then alphabetical by title.  Sometimes it is
easier to sort them by size.  It became more complex when VHS came out.  Each
tape contained a random mix of movies, TV shows, shorts, commercials and news
reports.  The tapes were indexed chronologically and the contents were kept in
a notebook.  Every time a new format is introduced, the problem gets worse.

For a while I could keep DVDs with movies and documentaries sorted
alphabetically in albums.  Discs with TV shows were usually categorized by
which show that disc had the most episodes recorded on it.  I left occaisonal
gaps for new discs, but those quickly filled up and I was forced to resort the
entire collection to allow room for more growth.  As the number of discs and
albums grew, complete resorts became impractical.

The idea behind MEDIAdb is to store any type of information medium as
compactly as possible, leave them in whatever order they are already in, give
each collection (book, magazine, DVD, tape, etc) an index number.  Then refer
to the collections by their index and write the range of index numbers on the
outside of the container holding the collections.  Any new additions to the
containers are placed in the next available position, reguardless of the
collections content.

### Instructions
On the MEDIAdb home page, click the "Sign up now!" link and create an account
by entering a name, an email address and a password.  The name can be pretty
much anything as long as it's not blank.  The email needs to be in standard
email format and the password needs to be between 8 and 20 characters long and
have at least one lowercase letter, one uppercase letter and one digit.  If an
account already exists, click the "Sign in" link and enter the user's email
address and password.

After sign in, the user goes to the page that lists any media they've already
entered.  To start a new collection (DVD, CD, etc), click "Add New Media,"
enter the format of the collection and click the "Create Dvd" button.  If
media already exists, click the "Show" link next to the collection and then
click "Add New File."

### Links
The GitHub repo is: https://github.com/DaveShaffer/MEDIAdb

Heroku repo is: https://wdi6-proj2-mediadb.herokuapp.com

The link to Trello: https://trello.com/b/x46hY0We/mediadb-ga-wdi-proj-2

### Wireframe
![#db wireframe1](https://github.com/DaveShaffer/MEDIAdb/blob/master/app/assets/images/20160429_104700.jpg)

![#db wireframe2](https://github.com/DaveShaffer/MEDIAdb/blob/master/app/assets/images/20160429_110230.jpg)

### Technologies and Tools
This app is written in Ruby 2.2.4, Rails 4.2.6 and PostgreSQL 9.5.1.  It
incorporates authentication and authorization through a session controller
which prevents one user from seeing or editing another users data.  This app
also uses nested RESTful routing to control associations between database
tables.

### Future Versions
Future versions of MEDIAdb will have better CSS styling, more columns in the
database for user information like phone num. and address.  Also the user will
be able to add file information like the length of the material, who wrote it
and a space to enter comments.  There will also be a method for searching for
files.



