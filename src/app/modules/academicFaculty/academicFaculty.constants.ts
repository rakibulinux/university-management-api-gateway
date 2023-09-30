export const academicFacultyFilterableFields: string[] = ['searchTerm', 'id', 'academicFacultyId'];

export const academicFacultySearchableFields: string[] = ['title'];

export const academicFacultyRelationalFields: string[] = ['academicFacultyId'];
export const academicFacultyRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicFacultyId: 'academicFaculty'
};
export const EVENT_ACADEMIC_FACULTY_CREATED = 'academic-faculty-created';
export const EVENT_ACADEMIC_FACULTY_UPDATED = 'academic-faculty-updated';
export const EVENT_ACADEMIC_FACULTY_DELETE = 'academic-faculty-delete';
