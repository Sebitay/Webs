-- Crear Base de datos
CREATE DATABASE IF NOT EXISTS confessions_db DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE confesiones;

-- Darle permisos al usuario
GRANT ALL ON confesiones.* TO dbadmin@localhost;

-- Crear Tabla de usuarios
CREATE TABLE usuarios(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Crear Tabla de Confesiones
CREATE TABLE confesiones(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  conf_text VARCHAR(255) NOT NULL,
  conf_img VARCHAR(255) NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
