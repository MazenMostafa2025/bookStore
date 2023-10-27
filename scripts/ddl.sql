CREATE SCHEMA bms;

-- bms.book definition

-- Drop table

-- DROP TABLE bms.book;

create table bms.book (
	book_id serial not null,
	book_title varchar(300) not null,
	book_description varchar(2000) null,
	book_author varchar(50) not null,
	book_publisher varchar(50) not null,
	book_pages int null,
	store_code varchar(5) not null,
	created_on timestamp not null,
	created_by varchar(50) not null,
	constraint book_pkey primary key (book_id)
);

-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

create table bms.store (
	store_id serial not null,
	store_name varchar(100) not null,
	store_code varchar(5) null,
	created_on timestamp not null,
	created_by varchar(50) not null,
	constraint store_pkey primary key (store_id)
);

ALTER TABLE bms.store ADD address varchar(200) NOT NULL;
