
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Subject {
  id: string;
  course_code: string;
  course_name: string;
  credits: number;
  semester: number;
  branch: string;
  materials_count: number;
  downloads_count: number;
}

export const useSubjects = (selectedBranch: string, selectedSemester: number, searchQuery: string = '') => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('subjects')
          .select('*')
          .eq('branch', selectedBranch)
          .eq('semester', selectedSemester)
          .order('course_code');

        if (searchQuery.trim()) {
          query = query.or(`course_name.ilike.%${searchQuery}%,course_code.ilike.%${searchQuery}%`);
        }

        const { data, error } = await query;

        if (error) throw error;
        setSubjects(data || []);
      } catch (err: any) {
        setError(err.message);
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [selectedBranch, selectedSemester, searchQuery]);

  return { subjects, loading, error };
};
