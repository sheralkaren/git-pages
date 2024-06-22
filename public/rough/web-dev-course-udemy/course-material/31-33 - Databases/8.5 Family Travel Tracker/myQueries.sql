create table students (
	id serial primary key,
	fName text not null,
	lname text
);

insert into students (fName, lName)
values
('Angela', 'Yu')
('Dharmendra', 'Rathod'),
('Sheral', 'Fernandes'),
('Mohit', 'Agarwal'),
('Shweta', 'Dhawan');

select * from students;

-- one to one --
create table students_bio (
	id serial primary key,
	age int not null,
	about text,
	address text,
	guardianName text,
	student_id int references students(id) unique
);

insert into students_bio (age, about, address, guardianName, student_id)
values
(29, 'I am a good player', 'Märkische Allee 384', 'Sree Narayan Rathore', 1),
(33, 'good person in physical hot form - @me', 'Märkische Steuer 19', 'Sunita Sree Rathore', 2),
(41, 'I like to dance on weekends', '123 Boulevard Street, Panama', 'Mohit Chauhan', 3),
(53, 'Neither of us know who I am', '29B, New york street, NY', 'Sukhail Khan', 4),
(29, 'I teach really well', '241, Yong Dau center, Beijing, China', 'John Bauer',5);


select fName, address, guardianName from students
join students_bio
on students.id = students_bio.id;