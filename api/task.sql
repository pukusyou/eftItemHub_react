CREATE DATABASE tarkov;

USE tarkov;

CREATE TABLE Task (
    task_id VARCHAR(255) PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    wiki_url VARCHAR(255) NOT NULL,
    requirement JSON NOT NULL,
    minPlayerLevel INT NOT NULL,
    kappaRequired BOOLEAN NOT NULL,
    lightkeeperRequired BOOLEAN NOT NULL
);

-- CREATE TABLE Item (
--     item_id VARCHAR(255) PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     img VARCHAR(255) NOT NULL,
--     category VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE TaskItems (
--     id VARCHAR(255) PRIMARY KEY,
--     task_id VARCHAR(255) NOT NULL,
--     item_id VARCHAR(255) NOT NULL,
--     num INT NOT NULL,
--     inRaid BOOLEAN NOT NULL,
--     FOREIGN KEY (task_id) REFERENCES Task(task_id) ON DELETE CASCADE,
--     FOREIGN KEY (item_id) REFERENCES Item(item_id)
-- );
