import { z } from 'zod';

const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Faculty Title Required'
    })
  })
});
const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string().optional()
  })
});

export const AcademicFacultyValidation = {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema
};
