CREATE TABLE permissions (
    permissions_id SERIAL PRIMARY KEY,
    permissions_NAME VARCHAR(150) NOT NULL,
    permissions_codename VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW (),
    updated_at TIMESTAMP DEFAULT NOW (),
    content_type_id INTEGER
);