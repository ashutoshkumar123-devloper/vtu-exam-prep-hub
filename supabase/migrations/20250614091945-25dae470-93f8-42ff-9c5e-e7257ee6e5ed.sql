
-- Insert 1st year subjects (common for all branches)
INSERT INTO public.subjects (course_code, course_name, credits, semester, branch, materials_count, downloads_count) VALUES
-- Semester 1
('BMATS101', 'Mathematics-I for CSE Stream', 4, 1, 'COMMON', 18, 2800),
('BPHYS102', 'Applied Physics for CSE Stream', 4, 1, 'COMMON', 15, 2400),
('BPOPS103', 'Principles of Programming Using C', 3, 1, 'COMMON', 20, 3200),
('BESCK104', 'Engineering Science Course-I', 3, 1, 'COMMON', 12, 1900),
('BETCK105', 'Emerging Technology Course-I', 3, 1, 'COMMON', 10, 1600),
('BPLCK105', 'Programming Languages Course-I', 3, 1, 'COMMON', 14, 2200),
('BPWSK106', 'Professional Writing Skills in English', 1, 1, 'COMMON', 8, 1300),
('BICOK107', 'Indian Constitution', 1, 1, 'COMMON', 6, 950),
('BSFHK158', 'Scientific Foundations of Health', 1, 1, 'COMMON', 5, 800),

-- Semester 2
('BMATS201', 'Mathematics-II for CSE Stream', 4, 2, 'COMMON', 16, 2600),
('BCHES202', 'Applied Chemistry for CSE Stream', 4, 2, 'COMMON', 13, 2100),
('BCEDK203', 'Computer-Aided Engineering Drawing', 3, 2, 'COMMON', 11, 1800),
('BESCK204', 'Engineering Science Course-II', 3, 2, 'COMMON', 9, 1500),
('BETCK205', 'Emerging Technology Course-II', 3, 2, 'COMMON', 8, 1300),
('BPLCK205', 'Programming Languages Course-II', 3, 2, 'COMMON', 12, 1950),
('BPWSK206', 'Professional Writing Skills in English', 1, 2, 'COMMON', 7, 1100),
('BICOK207', 'Indian Constitution', 1, 2, 'COMMON', 5, 850),
('BSFHK258', 'Scientific Foundations of Health', 1, 2, 'COMMON', 4, 700);
