
CREATE TABLE teachers (
    teacher_id SERIAL PRIMARY KEY,
    teacher_name VARCHAR(200) NOT NULL
    
);

CREATE TABLE classes (
    class_id SERIAL PRIMARY KEY,
    class_name VARCHAR(200) NOT NULL,
    teacher_id INT
    
);
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(200) NOT NULL
    
);

CREATE TABLE student_classes (
    student_id INTEGER,
    class_id INTEGER
    
);
INSERT INTO public.teachers(
	teacher_id, teacher_name)
	VALUES (1,'Sarah Markwaithe'),
(2,'John Bellamy'),
(3,'Jordan Fingleberry'),
(4,'Susan Merchant'),
(5,'Bobby Franker'),
(6,'Sally Smith-Holdern'),
(7,'Finley Farringdon'),
(8,'Sarah Markwaithe'),
(9,'Simone Grath'),
(10,'Frederick Balchum');


INSERT INTO public.classes(
	class_id, class_name, teacher_id)
	VALUES 
(1,'Biology', 2)
(2,'Chemistry', 2)
(3,'Calculus', 1)
(4,'Geometry', 3)
(5,'Earth Science', 4)
(6,'PE', 3)
(7,'Art', 5)
(8,'Band', 6)
(9,'English', 7)
(10,'History', 8)
(11,'German', 9)
(12,'Spanish', 10)
(13,'Woodshop', 10)
(14,'World Studies', 1)
(15,'Physics', 3), 4
(16,'Art History', 6)
(17,'Programming', 5)
(18,'Welding', 7)
(19,'Life Skills', 8)
(20,'Creative Writing', 9);


INSERT INTO public.students(
	student_id, student_name)
	VALUES 
(1,'Alina Frederick'),
(2,'Kase Shah'),
(3,'Angelica Solomon'),
(4,'Musa Norton'),
(5,'Kylee Rodgers'),
(6,'Mathias Fields'),
(7,'Annie Dalton'),
(8,'Fletcher Hansen'),
(9,'Hope Crawford'),
(10,'Milo Donnell'),
(11,'Ryan Aguilar'),
(12,'Kevin Brady'),
(13,'Bellamy Walters'),
(14,'Colson Hutchinson'),
(15,'Owen White'),
(16,'Layla Ellis'),
(17,'Cole Walters'),
(18,'Samara Olson'),
(19,'Malachi Shaffer'),
(20,'Alanna Noble'),
(21, 'Harlow Beil'),
(22, 'Ariel Hicks');


INSERT INTO public.student_classes(
    student_id, class_id)
    VALUES
   (18, 1),
   (18, 5),
   (18, 4),
   (22, 1),
   (22, 2),
   (22, 3),
   (3, 4),
   (3, 5),
   (3, 6),
   (17, 10),
   (17, 9),
   (12, 8),
   (12, 5),
   (12, 7),
   (10, 3),
   (10, 7),
   (8, 1),
   (8, 2),
   (6, 4),
   (6, 8);




-- SELECT teachers.teacher_id, teachers.teacher_name, classes.class_id, classes.class_name
-- FROM teachers
-- INNER JOIN classes 
-- ON classes.teacher_id = teachers.teacher_id
-- INNER JOIN students
-- ON classes.class_id = students.student_id

-- SELECT teachers.teacher_id, teachers.teacher_name, classes.class_id, classes.class_name, students.student_name, students.student_id
-- FROM teachers
-- INNER JOIN classes 
-- ON classes.teacher_id = teachers.teacher_id
-- INNER JOIN student_classes
-- ON classes.class_id = student_classes.class_id
-- INNER JOIN students 
-- ON student_classes.student_id = students.student_id
