create table customer (
  customer_id serial primary key not null,
  firstname varchar(40),
  lastname varchar(40),
  email varchar(80),
  phone varchar(20),
  mailing_street1 varchar(80),
  mailing_street2 varchar(80),
  mailing_city varchar(80),
  mailing_zip varchar(20),
  mailing_state varchar(10),
  mailing_country varchar(20),
  billing_street1 varchar(80),
  billing_street2 varchar(80),
  billing_city varchar(80),
  billing_zip varchar(20),
  billing_state varchar(10),
  billing_country varchar(20)
);

create table orders (
  order_id serial primary key not null,
  date timestamp,
  total_price money,
  quantity int,
  customer_id int references customer(customer_id)
);

create table order_details (
  order_details_id serial primary key not null,
  product_id int,
  product_quantity int,
  order_id int references orders(order_id),
  product_price money
);

alter table order_details
  add foreign key (product_id) references products(product_id);

create table products (
  product_id serial primary key not null,
  name varchar(200),
  price money,
  image varchar(200),
  description varchar(400),
  product_category_id int
);

alter table products
  add foreign key (product_category_id) references product_categories(product_category_id);

create table product_categories (
  product_category_id serial primary key not null,
  name varchar(200)
);
