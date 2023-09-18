import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  isCreateExerciseDTO(createExercise: any): { isValid: boolean; message: string } {
    const mandatoryCreateExerciseDTOProperties = ['name', 'type', 'steps'];
    const missingProperties: string[] = [];

    mandatoryCreateExerciseDTOProperties.forEach((property) => {
      if (!createExercise.hasOwnProperty(property)) {
        missingProperties.push(property);
      }
    });
    return { isValid: missingProperties.length === 0, message: missingProperties.join(', ') };
  }
}
