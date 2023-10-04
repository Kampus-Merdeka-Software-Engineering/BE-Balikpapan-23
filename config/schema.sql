CREATE DATABASE IF NOT EXISTS `swift-express`;

USE `swift-express`;

CREATE TABLE IF NOT EXISTS tracking (
    id_receipt VARCHAR(50) PRIMARY KEY,
    sender_name VARCHAR(50) NOT NULL,
    sender_address VARCHAR(50) NOT NULL,
    recipient_name VARCHAR(50) NOT NULL,
    recipient_address VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS pricing (
    id_pricing INT AUTO_INCREMENT PRIMARY KEY,
    origin VARCHAR(50) NOT NULL,
    destination VARCHAR(50) NOT NULL,
    weight INT(10) NOT NULL
);

INSERT INTO tracking (id_receipt, sender_name, sender_address, recipient_name,
recipient_address, status)
VALUES
('123-0456-789', 'Bagus Wicaksana', 'Jl. Kelapa Baru No. 9', 'Margarita Fafo',
'Jl. Pinang Rasa No. 21', 'on delivery'),
('123-0456-790', 'Marsyanda Razita', 'Jl. Nusa Indah II No. 20', 'Ahmad Fahrul',
'Jl. Delima IV No. 5', 'on packing'),
('123-0456-791', 'Mukhlisul Muaffak', 'Jl. Melati III No. 7', 'Fisya Nisya',
'Jl. Pariwarna No. 15', 'has been delivered');
