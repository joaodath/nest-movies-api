
# Nest Movies API

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/joaodath/nest-movies-api)
[![Lines of Code](https://img.shields.io/tokei/lines/github/joaodath/nest-movies-api)](https://img.shields.io/tokei/lines/github/joaodath/nest-movies-api)
[![Repo Size](https://img.shields.io/github/repo-size/joaodath/nest-movies-api)](https://img.shields.io/github/repo-size/joaodath/nest-movies-api)
![CodeQL](https://github.com/joaodath/nest-movies-api/actions/workflows/codeql-analysis.yml/badge.svg)


A simple movies API built with NestJS for study purposes. It serves movies with genres and staff, persisting data using MySQL.


## Installation
To install this API and run it on your own computer, you'll need NodeJS and NPM installed beforehand.

Then, open the folder containing this code and run on terminal:

```
$ npm i
```

After installing all dependencies, you must point the API to a database, preferrably MySQL, but you can use other SQL databases too.

Copy the file `.env.example` to a new `.env`.
- Tip: You can do so using the terminal: 
```
cp .env.example .env
```

Then, fill in the spaces left with your credentials as below:

```
DATABASE_URL= "mysql://user:password@serverAdress:port/db_name"
```

If you're using PostgreSQL, change the protocol from `mysql://` to `postgresql://`. If you do so, remember to change it too on `./prisma/schema.prisma`

When you're done setting up the `.env` file, run: 

```
npx prisma migration dev --name init
```

This will make Prisma create the tables and relationships on your database while also creating the Prisma Client and all the methods necessary to CRUD endpoints.

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

### Movies Endpoints

```
##List All @GET
url/movies/list

##List By ID @GET
url/movies/list/:id
```
```
##Create @POST
url/movies/create

#Example:
{
  "name": "Dr.Birds Advice for Sad Poets",
  "img": "https://m.media-amazon.com/images/M/MV5BMGVjZmU2ZTQtNTFhYi00ZjFlLThlYzMtZTA3OTM5Y2UzODBjXkEyXkFqcGdeQXVyMTIzNzM0OTU@._V1_.jpg",
  "release_date": "2020",
  "duration": 110
}
```
```
##Update @PATCH
url/movies/update/:id

Example:
{
  "release_date": "2021"
}

##Add Genre and/or Staff
url/movies/addinfo

Example:
{
	"movieId": 1,
	"staffId": [
		{"id": 22}
	],
	"genreId": [
		{"id": 2},
		{"id": 3},
		{"id": 53}
	]
}
```
```
##Delete By ID @DELETE
url/movies/delete/:id

##Delete All @DELETE
url/movies/delete

```

### Genre Endpoints

```
##List All @GET
url/genre/list

##List By ID @GET
url/genre/list/:id
```

```
##Create @POST
url/genre/create

#Example:
{
	"name": "Humour"
}
```

```
##Update @PATCH
url/genre/update/:id

#Example
{
	"movieId": 1
}
```

```
##Delete By ID @DELETE
url/genre/delete/:id

##Delete All @DELETE
url/genre/delete

```

### Staff Endpoints

```
##List All @GET
url/staff/list

##List By ID @GET
url/staff/list/:id
```

```
##Create @POST
url/staff/create

#Example
{
	"name": "James Dooley",
	"img": "",
	"birth": "22-08-1976",
	"staff": "Music Composer"
}
```

```
##Update @PATCH
url/staff/update/:id

#Example
{
	"movieId": 1
}
```

```
##Delete By ID @DELETE
url/staff/delete/:id

##Delete All @DELETE
url/staff/delete
```

You can also find a file named `collection-insomnia.json` which contains the same endpoints ready to import on Insomnia.

## You should know
This project uses [commitlint](https://github.com/conventional-changelog/commitlint) to enforce a conventional format on all commits. So, if you fork or clone this repo, it will install commitlint as dev dependency too and affect how you create commits, even if it's against your own repo. _You can change this behavior on `package-lock.json`._

## Let's chat!
- Twitter: [@joaodath](https://twitter.com/joaodath)

- LinkedIn: [Jo??o Rodrigues](https://linkedin.com/in/joaodath)

## License

This API is [MPLv2 licensed](LICENSE).
