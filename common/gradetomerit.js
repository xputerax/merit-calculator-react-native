export default function gradeToMerit(grade) {
  switch (grade) {
    case 'A+':
      return 18;
      break;
    case 'A':
      return 16;
      break;
    case 'A-':
      return 14;
      break;
    case 'B+':
      return 12;
      break;
    case 'B':
      return 10;
      break;
    case 'C+':
      return 8;
      break;
    case 'C':
      return 6;
      break;
    case 'D':
      return 4;
      break;
    case 'E':
      return 2;
      break;
    case 'G':
      return 0;
      break;
    default:
      return 0;
      break;
  }
}
