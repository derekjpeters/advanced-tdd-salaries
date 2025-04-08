function removeSalaries(salaries) {
  const errorMessage = 'You must pass an array of numbers';
  if(!Array.isArray(salaries)) throw new Error(errorMessage);
  
  let result = [];
  for (let salary of salaries) {
    if (typeof salary !== 'number') throw new Error(errorMessage);
    if (salary >= 50000) {
      result.push(salary);
    }
  }
  return result;
}

module.exports = { removeSalaries };