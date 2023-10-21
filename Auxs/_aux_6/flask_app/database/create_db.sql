-- Crear Base de datos
CREATE DATABASE IF NOT EXISTS confessions_db DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE confessions_db;

-- Darle permisos al usuario
GRANT ALL ON confessions_db.* TO dbadmin@localhost;

-- Crear Tabla de usuarios
CREATE TABLE usuarios(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  profile_img VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

-- Crear Tabla de confesiones
CREATE TABLE confesiones(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  conf_title VARCHAR(255) NOT NULL,
  conf_text VARCHAR(255) NOT NULL,
  conf_img VARCHAR(255) NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
