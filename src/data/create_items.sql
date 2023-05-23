-- Efface la table items si elle existe
DROP TABLE IF EXISTS "items";

CREATE TABLE "items" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(128),
  "price" VARCHAR(128),
  "description" VARCHAR(255),
  "item_picture_url" VARCHAR(255)
);

INSERT INTO "items" ("name", "price", "description", "item_picture_url") VALUES 

('Coffee', 
'1,50€', 
'Une belle tasse de café des plus classiques...', 
'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
), 

('Coffee please', 
'1€', 
'Tasse de café premium apporté avec politesse.', 
'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
);