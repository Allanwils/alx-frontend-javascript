export const CPP_SUBJECT: string = "C++";
export const JAVA_SUBJECT: string = "Java";
export const REACT_SUBJECT: string = "React";

export class Teacher {
  experienceTeachingC: number;

  constructor(experienceTeachingC: number) {
    this.experienceTeachingC = experienceTeachingC;
  }
}

export function getRequirements(subject: string): string {
  if (subject === CPP_SUBJECT)
    return "C++ requirements";
  else if (subject === JAVA_SUBJECT)
    return "Java requirements";
  else if (subject === REACT_SUBJECT)
    return "React requirements";
  else
    return "Unknown subject";
}

export function getAvailableTeacher(subject: string, teacher: Teacher): string {
  if (subject === CPP_SUBJECT)
    return "C++ teacher";
  else if (subject === JAVA_SUBJECT)
    return "Java teacher";
  else if (subject === REACT_SUBJECT)
    return "React teacher";
  else
    return "Unknown subject";
}
