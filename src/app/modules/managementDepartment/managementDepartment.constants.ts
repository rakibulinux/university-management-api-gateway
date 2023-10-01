export const managementDepartmentFilterableFields: string[] = [
  'searchTerm',
  'id',
  'academicFacultyId'
];

export const managementDepartmentSearchableFields: string[] = ['title'];

export const managementDepartmentRelationalFields: string[] = ['academicFacultyId'];
export const managementDepartmentRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicFacultyId: 'academicFaculty'
};
