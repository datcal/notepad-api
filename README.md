[![Build Status](https://travis-ci.com/datcal/notepad-api.svg?branch=main)](https://travis-ci.com/datcal/notepad-api)
[![Build Status](https://gitlab.com/datcal/notepad-api/badges/main/pipeline.svg?ignore_skipped=true)](https://gitlab.com/datcal/notepad-api)


# notepad-api
Api for the notepad application

You can deploy notepad application yourself. See the live example
```
https://notepad-api-datcal.herokuapp.com
```

## Docs
- [Set up](#set-up)
- [Configuring Database](#configuring-database)
- [Configuring JWT](#configuring-jwt)
- [Configuring Test Process](#configuring-test-process)


## Set up
First clone the repo. Copy the `.env.example` file to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```


## Configuring Database
1. Go to the [MongoDB Atlas Console](https://www.mongodb.com/cloud/atlas/) and create a new database
2. Get to database uri and Paste this in your .env file

## Configuring JWT
1. Define secret key in your .env file 
```
API_SECRET_KEY=SOME_LONG_TEXT
```

## Configuring Test Process
1. Define test user mail and password in your .env file 

```
TESTUSER=email

TESTUSERPASSWORD=password
```


## Run Your Project
In the project folder, run:

```
npm install

npm start
```

# Notes

| Route | HTTP Verb	 | POST body	 |Header	 | Description	 |
| --- | --- | --- | --- | --- |
| /notes | `GET` | Empty | x-access-token=token | List all notes. |
| /notes | `POST` | {'content':'foo'} | x-access-token=token | Create a new note. |
| /notes/:id | `GET` | Empty | x-access-token=token | Get a note. |
| /notes/:id | `PUT` | {'content':'bar'} | x-access-token=token | Update a note with new info. |
| /notes/:id | `DELETE` | Empty | x-access-token=token | Delete a note. |


# User

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /user/register | `POST` | {'mail' : 'test@test.com', 'password' : 'password','fullname' : 'Name Surname'} | Create a new user. |
| /user/login | `POST` | {'mail' : 'test@test.com', 'password' : 'password'} | Login user and generate a token. |


