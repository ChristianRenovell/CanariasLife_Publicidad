-- to create a new database
CREATE DATABASE canariaslife;

-- to use database
use canariaslife;

-- creating a new table
CREATE TABLE promoters (
  id INT PRIMARY KEY,
  nameBanner VARCHAR(200) ,
  banner TEXT,
  linkBanner TEXT,
  nameVideo VARCHAR(200) ,
  video TEXT,
  linkVideo TEXT
);

-- creating a new table
CREATE TABLE historyBanner (
  id INT,
  date datetime
);

-- creating a new table
CREATE TABLE historyVideo (
  id INT,
  date datetime
);

-- creating a new table
CREATE TABLE historyPromotersbanner (
  id INT,
  name VARCHAR (200),
  date datetime
);

CREATE TABLE historyPromotersvideo (
  id INT,
  name VARCHAR (200),
  date datetime
);

-- Insert 60 promoters
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (1,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (2,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (3,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (4,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (5,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (6,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (7,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (8,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (9,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (10,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (11,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (12,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (13,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (14,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (15,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (16,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (17,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (18,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (19,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (20,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (21,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (22,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (23,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (24,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (25,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (26,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (27,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (28,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (29,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (30,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (31,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (32,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (33,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (34,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (35,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (36,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (37,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (38,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (39,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (40,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (41,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (42,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (43,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (44,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (45,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (46,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (47,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (48,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (49,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (50,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (51,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (52,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (53,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (54,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (55,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (56,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (57,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (58,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (59,'','','','','','');
INSERT INTO `promoters`(`id`, `nameBanner`, `banner`,`linkBanner`,`nameVideo`, `video`,`linkVideo`) VALUES (60,'','','','','','');
Banner`nameVideo`,'','',