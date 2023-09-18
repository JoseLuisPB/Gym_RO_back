export class CreateExerciseDTO {
  name: string;
  group: string;
  exerciseFor: string;
  steps: string[];
  difficulty?: number;
  favorite?: boolean;
  gear?: string[];
}
