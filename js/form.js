
  const lessonFor = document.getElementById('lessonFor');
  const parentFields = document.getElementById('parentFields');
  const studentFields = document.getElementById('studentFields');

  function toggleFields() {
    const value = lessonFor.value;
    if (value === 'myself') {
      parentFields.style.display = 'none';
      studentFields.style.display = 'block';
    } else if (value === 'child') {
      parentFields.style.display = 'block';
      studentFields.style.display = 'block';
    } else {
      parentFields.style.display = 'none';
      studentFields.style.display = 'none';
    }
  }

  lessonFor.addEventListener('change', toggleFields);

  // Initial state
  toggleFields();

const lessonFor2 = document.getElementById('lessonFor2');
const parentFields2 = document.getElementById('parentFields2');
const studentFields2 = document.getElementById('studentFields2');

function toggleFields2() {
  const value = lessonFor2.value;
  if (value === 'myself') {
    parentFields2.style.display = 'none';
    studentFields2.style.display = 'block';
  } else if (value === 'child') {
    parentFields2.style.display = 'block';
    studentFields2.style.display = 'block';
  } else {
    parentFields2.style.display = 'none';
    studentFields2.style.display = 'none';
  }
}

lessonFor2.addEventListener('change', toggleFields2);


