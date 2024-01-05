# Building a movie recommendation system with Tensorflow and PGVector

## Part 1. Core Functionality: Generating embeddings and finding closest vectors

### Step 1. Setup PG service with Aiven

### Step 2. Setup TensorFlow to create a single vector

```
cd Part1Core
```

```
node test-pg-connection.js
```

### Step 3. Create Postgres  database, table and enable PGVector

```sql
CREATE EXTENSION vector;

CREATE TABLE movie_plots (
    title VARCHAR,
    director VARCHAR,
    "cast" VARCHAR,
    genre VARCHAR,
    plot TEXT,
    "year" SMALLINT,
    wiki VARCHAR,
    embedding vector(512)
);
```



### Step 4. Process all movies, generate vector embeddings and store in PG

sudo apt-get update
sudo apt-get install postgresql-client


go to link

pg-movie-recommender

go to quick connect

### Step 5. Search for nearest vectors

## Part 2. Visual Interface: Integrating into a full-stack web application
