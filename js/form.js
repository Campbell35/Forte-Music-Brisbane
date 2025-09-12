
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

