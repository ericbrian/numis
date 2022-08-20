-- Create numis db
-- ------------------------------------------------------

CREATE TABLE shape (
    id   SERIAL PRIMARY KEY,
    name TEXT    NOT NULL
);

INSERT INTO shape (name,id)
VALUES
    ('Tridecagonal',12),
    ('Triangular',2),
    ('Square/diamond',3),
    ('Scalloped',14),
    ('Pentagonal',4),
    ('Pentadecagonal',13),
    ('Octagonal',7),
    ('Nonagonal',8),
    ('Holed',15),
    ('Hexagonal',5),
    ('Heptagonal',6),
    ('Hendecagonal',10),
    ('Dodecagonal',11),
    ('Decagonal',9),
    ('Circular',1);

-- ------------------------------------------------------

CREATE TABLE country (
    id   SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    short_name TEXT NOT NULL
);

INSERT INTO country (name,short_name,id)
VALUES
    ('Germany, Federal Republic of', 'Germany', 1),
    ('United States of America', 'USA', 2),
    ('Panama, Republic of', 'Panama', 3),
    ('Marshall Islands, Republic of the', 'Marshall Islands', 4),
    ('Canada', 'Canada', 5),
    ('Austria, Republic of', 'Austria', 6),
    ('Malta, Republic of', 'Malta', 7),
    ('United Kingdom', 'UK', 8);

-- ------------------------------------------------------

 CREATE TABLE image (
    id   SERIAL PRIMARY KEY,
    url         TEXT,
    hash        TEXT,
    copyright   TEXT,
    description TEXT
);

-- ------------------------------------------------------

CREATE TABLE mint (
    id   SERIAL PRIMARY KEY,
    mark        TEXT    NOT NULL,
    description TEXT,
    country_id  INTEGER NOT NULL,
    FOREIGN KEY (country_id) REFERENCES country (id)
);

INSERT INTO mint (country_id,description,mark,id)
VALUES
    (1,'Stuttgart (former Kingdom of Wurttemberg)','F',1),
    (1,'Karlsruhe (former Grand Duchy of Baden)','G',2),
    (1,'Berlin (former Kingdom of Prussia)','A',3),
    (1,'Munich (former Kingdom of Bavaria)','D',4),
    (1,'Hamburg (Hanseatic City of Hamburg)','J',5),
    (2,'Dahlonega (1838 - 1861)','D',6),
    (2,'Charlotte (1849-55, 1857, and 1859)','C',7),
    (2,'New Orleans (1838 - 1861 & 1879 - 1909)','O',8),
    (2,'San Francisco','S',9),
    (2,'Carson City (1870 - 1893)','CC',10),
    (2,'Manila (1920 - 1941)','M',11),
    (2,'Philadelphia ','P',12),
    (2,'Denver (1863 - Current)','D',13),
    (2,'West Point','W',14);

-- ------------------------------------------------------

CREATE TABLE grade (
    id   SERIAL PRIMARY KEY,
    short_grade TEXT,
    name TEXT,
    sort_order  INTEGER NOT NULL DEFAULT (0)
);

INSERT INTO grade (sort_order,short_grade,name,id)
VALUES
    (2,'BU','Brilliant Uncirculated',1),
    (3,'BU-UNC','Brilliant Uncirculated - Uncirculated',2),
    (4,'UNC','Uncirculated',3),
    (5,'UNC-AU','Uncirculated - Almost Uncirculated',4),
    (6,'AU','Almost Uncirculated',5),
    (7,'AU-EF','Almost Uncirculated - Extremely Fine',6),
    (8,'EF','Extremely Fine',7),
    (9,'EF-VF','Extremely Fine - Very Fine',8),
    (10,'VF','Very Fine',9),
    (11,'VF-F','Very Fine - Fine',10),
    (12,'F','Fine',11),
    (13,'F-VG','Fine - Very Good',12),
    (14,'VG','Very Good',13),
    (15,'VG-G','Very Good - Good',14),
    (16,'G','Good',15),
    (16,'G-AG','Good - Almost Good',16),
    (17,'AG','Almost Good',17),
    (18,'AG-FR','Almost Good - Fair',18),
    (19,'FR','Fair',19),
    (20,'FR-PO','Fair - Poor',20),
    (21,'PO','Poor',21),
    (1,'PR','Proof',22);

-- ------------------------------------------------------

CREATE TABLE currency (
    id   SERIAL PRIMARY KEY,
    name             TEXT    NOT NULL,
    short_name       TEXT,
    years            TEXT    NOT NULL,
    demonitized_date TEXT,
    comments         TEXT
);

INSERT INTO currency (comments,demonitized_date,years,short_name,name,id)
VALUES
    (NULL,NULL,'1690 - Present','US$','US Dollar',1),
    (NULL,'2002-03-01','1948 - 2002','DM','Deutsche Mark',2),
    ('No value coins exist as is the case, for example, with the commemorative dollar coins that the Marshall Islands makes. ',NULL,'','$','Dollar with no value',3),
    (NULL,NULL,'1867 - Present','$','Canadian Dollar',4),
    (NULL,NULL,'1904 - Present','PAB','Panamanian Balboa',5),
    (NULL,NULL,'2002 - Present','€','Euro',6),
    (NULL,NULL,'1971 - Present','£','Pound Sterling (GBP) ',7);

-- ------------------------------------------------------

CREATE TABLE currency_country (
    id   SERIAL PRIMARY KEY,
    currency_id INTEGER NOT NULL,
    country_id INTEGER NOT NULL,
    FOREIGN KEY (currency_id) REFERENCES currency (id),
    FOREIGN KEY (country_id) REFERENCES country (id)
);

INSERT INTO "currency_country" ("id", "currency_id", "country_id")
VALUES
    (1, 6, 1),
    (2, 6, 6),
    (3, 6, 7),
    (4, 2, 1),
    (5, 1, 2),
    (6, 4, 3),
    (7, 5, 4),
    (8, 3, 5),
    (9, 7, 8);

-- ------------------------------------------------------

CREATE TABLE coin (
    id   SERIAL PRIMARY KEY,
    face_value          TEXT    NOT NULL,
    currency_id         INTEGER NOT NULL,
    obverse_description TEXT    NOT NULL,
    reverse_description TEXT    NOT NULL,
    edge_description    TEXT    NOT NULL,
    years               TEXT,
    mint_marks          TEXT    NOT NULL,
    composition         TEXT,
    weight_grams        REAL,
    diameter_mm         REAL,
    thickness_mm        REAL,
    shape_id            INTEGER,
    comments            TEXT,
    country_id          INTEGER,
    FOREIGN KEY (currency_id) REFERENCES currency (id),
    FOREIGN KEY (shape_id) REFERENCES shape (id),
    FOREIGN KEY (country_id) REFERENCES country (id)
);

-- ------------------------------------------------------

CREATE TABLE coin_image (
    id   SERIAL PRIMARY KEY,
    coin_id  INTEGER NOT NULL,
    image_id INTEGER NOT NULL,
    FOREIGN KEY (coin_id) REFERENCES coin (id),
    FOREIGN KEY (image_id) REFERENCES image (id)
);

-- ------------------------------------------------------

CREATE TABLE collection (
    id   SERIAL PRIMARY KEY,
    coin_id          INTEGER,
    year             TEXT,
    mint_id          INTEGER,
    grade_id         INTEGER,
    condition        TEXT,
    paid_amount      REAL,
    paid_currency_id INTEGER,
    sourced_from     TEXT,
    sourced_when     TEXT,
    is_cleaned       BOOLEAN NOT NULL DEFAULT (false),
    FOREIGN KEY (mint_id) REFERENCES mint (id),
    FOREIGN KEY (paid_currency_id) REFERENCES currency (id),
    FOREIGN KEY (grade_id) REFERENCES grade (id),
    FOREIGN KEY (coin_id) REFERENCES coin (id)
);
