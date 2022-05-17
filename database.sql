CREATE TABLE koalaChart(
	"id" serial PRIMARY KEY,
	"name" varchar(128),
	"gender" varchar(10),
	"age" varchar(3),
	"ready_to_transfer" varchar(10),
	"notes" varchar(128)
);

SELECT * FROM koalaChart;
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Scotty', 'M', '4', 'Y', 'Born in Guatemala')
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Jean', 'F', '5', 'Y', 'Allergic to lots of lava')
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Ororo', 'F', '7', 'N', 'Loves listening to Paula (Abdul)')
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Logan', 'M', '15', 'N', 'Loves the sauna')
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Charlie', 'M', '9', 'Y', 'Favorite band is Nirvana')
INSERT INTO koalaChart (name, gender, age, ready_to_transfer, notes) VALUES ( 'Betsy', 'F', '4', 'Y', 'Has a pet iguana')