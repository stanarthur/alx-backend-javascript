/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: number,
 *   firstName: string,
 *   location: string
 * }[]} students - the list of students.
 * @returns {number[]} - An array of student IDs.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}

