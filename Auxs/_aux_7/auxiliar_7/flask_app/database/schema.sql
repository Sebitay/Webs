-- Crear Base de datos
CREATE DATABASE IF NOT EXISTS confesiones DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- Crear usuario
CREATE USER 'dbadmin'@'localhost' IDENTIFIED BY 'dbadmin';

-- Darle permisos al usuario
GRANT ALL ON confesiones.* TO dbadmin@localhost;

USE confesiones;
-- Crear Tabla de usuarios
CREATE TABLE usuarios(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  profile_img VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

-- Crear Tabla de Confesiones
CREATE TABLE confesiones(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  conf_title VARCHAR(255) NOT NULL,
  conf_text VARCHAR(255) NOT NULL,
  conf_img VARCHAR(255) NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
