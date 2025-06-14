
-- Insert complete CSE subjects data for all semesters
INSERT INTO public.subjects (course_code, course_name, credits, semester, branch, materials_count, downloads_count) VALUES
-- CSE Semester 3 (additional subjects)
('BCS358A', 'Excel for Data Analysis (AEC)', 1, 3, 'CSE', 5, 890),
('BCSXXX', 'LaTeX for Documentation (AEC)', 1, 3, 'CSE', 3, 650),
('BCSXXX', 'Python for Data Visualization', 1, 3, 'CSE', 7, 1120),

-- CSE Semester 4 (additional subjects)
('BCS405D', 'Linear Algebra (Math Elective)', 3, 4, 'CSE', 9, 1850),

-- CSE Semester 5
('BCS501', 'Software Engineering and Project Management', 4, 5, 'CSE', 14, 2250),
('BCS502', 'Computer Networks', 4, 5, 'CSE', 12, 2100),
('BCS5XX', 'Web Programming (HTML, CSS, JS, PHP, jQuery, Ajax, JSON)', 1, 5, 'CSE', 8, 1450),
('BCS5XX', 'Distributed Systems', 4, 5, 'CSE', 10, 1800),

-- CSE Semester 6
('BCS601', 'Cloud Computing', 4, 6, 'CSE', 11, 1950),
('BCS602', 'Machine Learning', 4, 6, 'CSE', 15, 2800),
('BCS6XX', 'Compiler Design', 4, 6, 'CSE', 9, 1650),
('BCS6XX', 'Advanced Java Programming', 4, 6, 'CSE', 13, 2200),
('BCS6XX', 'Android App Development', 3, 6, 'CSE', 11, 1800),
('BCS6XX', 'Tosca Automation Tool', 1, 6, 'CSE', 4, 720),

-- CSE Semester 7
('BCS701', 'Internet of Things', 4, 7, 'CSE', 8, 1400),
('BCS702', 'Parallel Computing', 4, 7, 'CSE', 6, 1200),

-- AIML Semester 3 (additional subjects)
('BCS306', 'Database Management System', 4, 3, 'AIML', 16, 2650),
('BCSL307', 'Data Structures Lab', 1, 3, 'AIML', 5, 890),
('BCSL308', 'JAVA Lab', 1, 3, 'AIML', 6, 950),
('BCSL309', 'DBMS Lab', 1, 3, 'AIML', 7, 1100),
('BCS310', 'Universal Human Values', 1, 3, 'AIML', 3, 450),

-- AIML Semester 5 (additional subjects)
('BCS501', 'Software Engineering & Project Management', 4, 5, 'AIML', 14, 2250),
('BCS502', 'Computer Networks', 4, 5, 'AIML', 12, 2100),
('BCS553', 'Professional Elective 1', 3, 5, 'AIML', 8, 1300),
('BCS554', 'Open Elective 1', 3, 5, 'AIML', 6, 980),

-- AIML Semester 6
('BAI601', 'Natural Language Processing', 4, 6, 'AIML', 12, 2000),
('BAI602', 'Machine Learning', 4, 6, 'AIML', 15, 2800),
('BCS654B', 'Fundamentals of Operating Systems', 3, 6, 'AIML', 9, 1500),
('BIS613D', 'Cloud Computing & Security', 3, 6, 'AIML', 8, 1350),
('BCS661', 'Minor Project / Internship', 2, 6, 'AIML', 5, 750),
('BCS662', 'Open Elective 2', 3, 6, 'AIML', 6, 980),

-- AIML Semester 7
('BAI701', 'Deep Learning and Reinforcement Learning', 4, 7, 'AIML', 10, 1800),
('BAI702', 'Machine Learning II', 4, 7, 'AIML', 11, 1950),
('BCS753', 'Professional Elective 2', 3, 7, 'AIML', 7, 1200),
('BCS754', 'Open Elective 3', 3, 7, 'AIML', 6, 980),
('BCS755', 'Research Methodology', 2, 7, 'AIML', 4, 650),
('BCS756', 'Project Phase 1', 4, 7, 'AIML', 8, 1300),

-- AI&DS Semester 3 (additional subjects)
('BAI358D', 'PHP Programming (Practical)', 1, 3, 'AI&DS', 5, 750),
('BCS358C', 'Project Management with Git', 1, 3, 'AI&DS', 4, 620),
('BSCK307', 'Social Connect & Responsibility', 1, 3, 'AI&DS', 2, 380),

-- AI&DS Semester 4
('BCS401', 'Design and Analysis of Algorithms', 4, 4, 'AI&DS', 18, 3200),
('BCS402', 'Database Management Systems', 4, 4, 'AI&DS', 16, 2650),
('BCS403', 'Computer Architecture and Microcontrollers', 4, 4, 'AI&DS', 12, 2100),
('BCS404', 'Environmental Studies', 2, 4, 'AI&DS', 6, 980),
('BCS405A', 'Discrete Mathematical Structures', 3, 4, 'AI&DS', 10, 1750),
('BCSL404', 'Analysis & Design of Algorithms Lab', 1, 4, 'AI&DS', 5, 820),
('BCS455', 'Python for Data Science', 1, 4, 'AI&DS', 8, 1200),
('BDSL456B', 'MongoDB (AEC - Practical)', 1, 4, 'AI&DS', 4, 650),

-- AI&DS Semester 5
('BCS501', 'Software Engineering & Project Management', 4, 5, 'AI&DS', 14, 2250),
('BCS502', 'Computer Networks', 4, 5, 'AI&DS', 12, 2100),
('BAI151A', 'Computer Vision', 3, 5, 'AI&DS', 8, 1200),
('BAI515E', 'Exploratory Data Analysis', 3, 5, 'AI&DS', 10, 1500),
('BCS553B', 'Distributed Systems', 3, 5, 'AI&DS', 9, 1450),
('BCSL507', 'Mini Project', 2, 5, 'AI&DS', 6, 850),
('BCS508', 'Environmental Studies and E-Waste Management', 2, 5, 'AI&DS', 4, 620),
('BAD515C', 'Cloud Computing', 3, 5, 'AI&DS', 8, 1300),
('BAIL504', 'Data Visualization Lab', 1, 5, 'AI&DS', 5, 750),

-- AI&DS Semester 6
('BAD601', 'Big Data Analytics', 4, 6, 'AI&DS', 12, 2000),
('BCS602', 'Machine Learning', 4, 6, 'AI&DS', 15, 2800),
('BAI613D', 'Time Series Analysis', 3, 6, 'AI&DS', 7, 1150),
('BAI616E', 'Blockchain Technology', 3, 6, 'AI&DS', 6, 980),
('BCS655D', 'Cloud Computing (Elective)', 3, 6, 'AI&DS', 8, 1300),
('BCSL608', 'Project Phase - I', 2, 6, 'AI&DS', 5, 750),
('BAD613B', 'Natural Language Processing', 3, 6, 'AI&DS', 9, 1500),
('DevOps AEC', 'DevOps with Jenkins, Git, Azure (AEC)', 1, 6, 'AI&DS', 4, 650),

-- AI&DS Semester 7
('BAI701', 'Deep Learning and Reinforcement Learning', 4, 7, 'AI&DS', 10, 1800),
('BAD702', 'Statistical Machine Learning for Data Science', 4, 7, 'AI&DS', 9, 1650),
('BAI751', 'Capstone Project', 8, 7, 'AI&DS', 12, 2000);
