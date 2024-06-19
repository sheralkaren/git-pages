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

-- INSERT INTO capitals VALUES (
	
-- );

TRUNCATE TABLE flags;
SELECT * FROM flags;
