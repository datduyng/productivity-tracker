sqlite3 .database.sqlite.db

.mode column
.mode column
.headers on
.timer on

-- date time sqlite
-- https://www.sqlitetutorial.net/sqlite-date/



CREATE TABLE notes (
    id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    content text,
    created_date text NOT NULL,
    last_update integer DEFAULT (CAST(strftime('%s','now') as integer))
);


