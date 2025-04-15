CREATE TABLE usuarios (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          nombre VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
                          apellido VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
                          telefono VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
                          email VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
                          password VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL
);
