
-- Create a profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  branch TEXT,
  semester INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Create a subjects table to store subject data for search
CREATE TABLE public.subjects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_code TEXT NOT NULL,
  course_name TEXT NOT NULL,
  credits INTEGER NOT NULL,
  semester INTEGER NOT NULL,
  branch TEXT NOT NULL,
  materials_count INTEGER DEFAULT 0,
  downloads_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on subjects (public read access)
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to subjects
CREATE POLICY "Anyone can view subjects" 
  ON public.subjects 
  FOR SELECT 
  TO public 
  USING (true);

-- Insert sample data for the specified branches
INSERT INTO public.subjects (course_code, course_name, credits, semester, branch, materials_count, downloads_count) VALUES
-- CSE Semester 3
('BCS301', 'Mathematics for Computer Science', 4, 3, 'CSE', 12, 2340),
('BCS302', 'Digital Design and Computer Organization', 4, 3, 'CSE', 15, 1890),
('BCS303', 'Operating Systems', 4, 3, 'CSE', 10, 1650),
('BCS306B', 'Object Oriented Programming with C++', 3, 3, 'CSE', 8, 1420),

-- CSE Semester 4
('BCS401', 'Data Structures and Algorithms', 4, 4, 'CSE', 18, 3200),
('BCS402', 'Object Oriented Programming with Java', 4, 4, 'CSE', 14, 2800),
('BCS403', 'Database Management Systems', 4, 4, 'CSE', 16, 2650),

-- AIML Semester 3
('BCS301', 'Mathematics for Computer Science', 4, 3, 'AIML', 12, 2340),
('BCS302', 'Digital Design and Computer Organization', 4, 3, 'AIML', 15, 1890),
('BCS303', 'Operating Systems', 4, 3, 'AIML', 10, 1650),
('BCS304', 'Data Structures and Applications', 3, 3, 'AIML', 11, 1780),
('BCS305', 'Object Oriented Programming with JAVA', 4, 3, 'AIML', 9, 1520),

-- AIML Semester 5
('BAI151A', 'Computer Vision', 3, 5, 'AIML', 8, 1200),
('BAI515E', 'Exploratory Data Analysis', 3, 5, 'AIML', 10, 1500),

-- AI&DS Semester 3
('BCS301', 'Mathematics for Computer Science', 4, 3, 'AI&DS', 12, 2340),
('BCS302', 'Digital Design and Computer Organization', 4, 3, 'AI&DS', 15, 1890),
('BCS303', 'Operating Systems', 4, 3, 'AI&DS', 10, 1650),
('BCS304', 'Data Structures and Applications', 3, 3, 'AI&DS', 11, 1780),
('BCS305', 'Object Oriented Programming with Java', 3, 3, 'AI&DS', 9, 1520),

-- ISE subjects (similar structure)
('BCS301', 'Mathematics for Computer Science', 4, 3, 'ISE', 12, 2340),
('BCS302', 'Digital Design and Computer Organization', 4, 3, 'ISE', 15, 1890),
('BCS303', 'Operating Systems', 4, 3, 'ISE', 10, 1650),

-- CSD subjects
('BCS301', 'Mathematics for Computer Science', 4, 3, 'CSD', 12, 2340),
('BCS302', 'Digital Design and Computer Organization', 4, 3, 'CSD', 15, 1890),
('BCS303', 'Operating Systems', 4, 3, 'CSD', 10, 1650);

-- Create a function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
