https://sqliteonline.com/#fiddle-5bbdbaef7288bo2ajn2wly03

https://sqliteonline.com/#

CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country TEXT,
  capital TEXT
);
-- id,country,capital
-- id,name,flag

CREATE TABLE flags (
  id SERIAL PRIMARY KEY,
  name TEXT,
  flag TEXT
);