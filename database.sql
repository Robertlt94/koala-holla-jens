CREATE TABLE koalaChart(
	"id" serial PRIMARY KEY,
	"name" varchar(128),
	"gender" varchar(10),
	"age" varchar(3),
	"ready_to_transfer" varchar(10),
	"notes" varchar(128)
);


SELECT * FROM koalaChart ORDER BY id ASC;

INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Scotty', '4', 'M', 'Y', 'Born in Guatemala')
INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Jean', '5', 'F', 'Y', 'Allergic to lots of lava')
INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Ororo', '7', 'F', 'N', 'Loves listening to Paula (Abdul)')
INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Logan', '15', 'M', 'N', 'Loves the sauna')
INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Charlie', '9', 'M', 'Y', 'Favorite band is Nirvana')
INSERT INTO koalaChart (name, age, gender, ready_to_transfer, notes) VALUES ( 'Betsy', '4', 'F', 'Y', 'Has a pet iguana')

UPDATE koalas SET ready_to_transfer=true WHERE id=2;