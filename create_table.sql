-- efface la table student si elle existe
DROP TABLE IF EXISTS "student";
-- efface la table promo si elle existe
DROP TABLE IF EXISTS "promo";

-- Création de la table promos
CREATE TABLE IF NOT EXISTS "promo" (
  "id" INT NOT NULL PRIMARY KEY,
  "name" VARCHAR(128),
  "github_organization" VARCHAR(255)
);

INSERT INTO "promo" ("id", "name", "github_organization") VALUES
(1, 'Big Bang', 'https://github.com/O-clock-BigBang'),
(5, 'Cosmos', 'https://github.com/O-clock-Cosmos'),
(6, 'Discovery', 'https://github.com/O-clock-Discovery'),
(16, 'Explorer', 'https://github.com/O-clock-Explorer'),
(18, 'Fusion', 'https://github.com/O-clock-Fusion'),
(23, 'Galaxy', 'https://github.com/O-clock-Galaxy'),
(24, 'Hyperspace', 'https://github.com/O-clock-Hyperspace'),
(29, 'Invaders', 'https://github.com/O-clock-Invaders'),
(33, 'Journey', 'https://github.com/O-clock-Journey'),
(37, 'Krypton', 'https://github.com/O-clock-Krypton'),
(43, 'Lunar', 'https://github.com/O-clock-Lunar'),
(46, 'Meteor', 'https://github.com/O-clock-Meteor'),
(50, 'Nova', 'https://github.com/O-clock-Nova');

-- Création de la table student
CREATE TABLE IF NOT EXISTS "student" (
  -- SERIAL : on laisse la BDD  gérer ce champ seule
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(128),
  "last_name" VARCHAR(128),
  "github_username" VARCHAR(255),
  "profile_picture_url" VARCHAR(255),
  "promo_id" INT REFERENCES "promo"("id")
);

INSERT INTO "student" ("first_name","last_name","github_username","profile_picture_url", "promo_id") VALUES
('DAMIEN', 'MARX', 'Damien-Marx','https://github.com/Damien-Marx.png', 589),
('FLORENT', 'POUDROUX', 'Flo2ent','https://github.com/Flo2ent.png', 589),
('ROBIN', 'MARCHE', 'RobinMarche','https://github.com/RobinMarche.png', 589),
('VIRGILE', 'BOUALI', 'virgilebouali','https://github.com/virgilebouali.png', 589),
('ALEXIS', 'DELAHAYE', 'AlexisDelahaye7','https://github.com/AlexisDelahaye7.png', 589),
('JEROME', 'MAREL', 'jerome-marel','https://github.com/jerome-marel.png', 589),
('Alexandre', 'TENSORER', 'AlexTensorer','https://github.com/AlexTensorer.png', 589),
('CLAIRE', 'GABRIELLI', 'gabrielliClaire','https://github.com/gabrielliClaire.png', 589),
('ANTHONY', 'BOURRET', 'AnthonyBourret','https://github.com/AnthonyBourret.png', 589),
('CHRISTOPHE', 'CALBAT', 'christophe-calbat','https://github.com/christophe-calbat.png', 589),
('BRENDA ANDREEA', 'RAUTA', 'RautaBrendaAndreea','https://github.com/RautaBrendaAndreea.png', 589),
('NASSIMA', 'KADRI', 'NassimaKadri','https://github.com/NassimaKadri.png', 589),
('MAXIME', 'SIKORA', 'Maxime-Sikora','https://github.com/Maxime-Sikora.png', 589),
('EMILIE', 'DOLLEZ', 'EmilieDollez','https://github.com/EmilieDollez.png', 589),
('STEEVE', 'MATOU', 'Tiyyo','https://github.com/Tiyyo.png', 589);