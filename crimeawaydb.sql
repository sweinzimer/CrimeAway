DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `dispatcher`;
DROP TABLE IF EXISTS `report`;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    pass VARCHAR (255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (email)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE dispatcher (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    pass VARCHAR (255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (email)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE report (
    id INT NOT NULL AUTO_INCREMENT,
    userid INT,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (255) NOT NULL,
    street VARCHAR (255) NOT NULL,
    city VARCHAR (32) NOT NULL,
    state VARCHAR (32) NOT NULL,
    date DATE NOT NULL,
    submitted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR (255),
    severity INT NOT NULL,
    crimetype VARCHAR (255),
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;