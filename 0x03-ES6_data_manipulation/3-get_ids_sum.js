/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: number,
 *   firstName: string,
 *   location: string
 * }[]} students - the list of students.
 * @returns {number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}

