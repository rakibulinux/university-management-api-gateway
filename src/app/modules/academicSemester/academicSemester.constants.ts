import {
  IAcademicSemesterCodes,
  IAcademicSemesterTitles,
  IAcademicSemesterMonths
} from './academicSemester.interface';

export const academicSemesterTitles: IAcademicSemesterTitles[] = ['Autumn', 'Summer', 'Fall'];

export const academicSemesterCodes: IAcademicSemesterCodes[] = ['01', '02', '03'];

export const acdemicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03'
};

export const EVENT_ACADEMIC_SEMESTER_CREATED = 'academic-semester-created';
export const EVENT_ACADEMIC_SEMESTER_UPDATED = 'academic-semester-updated';
export const EVENT_ACADEMIC_SEMESTER_DELETE = 'academic-semester-delete';
export const academicSemesterSearchableFields = ['title', 'code', 'year'];

export const academicSemesterFilterableFields = ['searchTerm', 'title', 'code', 'year'];
