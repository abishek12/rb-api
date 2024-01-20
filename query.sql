create database rachanabachan;

use database rachanabachan;

create table user(
    id int primary key not null auto_increment,
    user_id bigint not null unique,
    firstName varchar(16) not null,
    middleName varchar(16),
    lastName varchar(16) not null,
    email varchar(50) not null unique,
    password varchar(50) not null,
    contact_no bigint not null,
    gender varchar(16) not null,
    role varchar(16) default 'subscriber',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table team(
    id int primary key not null auto_increment,
    firstName varchar(16) not null,
    middleName varchar(16) null,
    lastName varchar(16) not null,
    email varchar(50) not null unique,
    role varchar(16) not null,
    bio text,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table contact(
    id int primary key not null auto_increment,
    fullName varchar(16) not null,
    subject varchar(255) not null,
    email varchar(50) not null,
    status varchar(5) default 'false',
    message text,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table category(
    id int primary key not null auto_increment,
    title varchar(255) not null,
    slug varchar(300) not null,
    author_id int not null,
    author_id foreign key references user(id),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table article(
    id int primary key not null auto_increment,
    title varchar(255) not null,
    slug varchar(300) not null,
    category_id int not null,
    author_id int not null,
    featured_image varchar(255) null,
    expert varchar(255) null,
    description text not null,
    category_id foreign key references category(id),
    user_id foreign key references user(id),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);