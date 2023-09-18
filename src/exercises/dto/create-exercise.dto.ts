export class CreateExerciseDTO {
  name: string;
  type: string;
  steps: string[];
  difficulty?: number;
  gear?: string[];
}
