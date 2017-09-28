CREATE TABLE movies (     
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  director VARCHAR(100),
  year VARCHAR(50),
  rated VARCHAR(50),
  genre VARCHAR(400),
  actors VARCHAR(500),
  plot VARCHAR(1000),
  image_url VARCHAR(400)
);

INSERT INTO movies (title, director, year, rated, genre, actors, plot, image_url) VALUES ('', '', '', '', '', '', '', '');