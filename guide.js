document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("btn");
  const coffA = document.getElementById("a");
  const coffB = document.getElementById("b");
  const coffC = document.getElementById("c");
  const solutionRender = document.querySelector(".solution-render");
  const navIcon = document.getElementById("icon");
  let list = document.querySelector("ul");

  submit.addEventListener("click", function () {
    const a = parseFloat(coffA.value);
    const b = parseFloat(coffB.value);
    const c = parseFloat(coffC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      solutionRender.textContent =
        "Please enter valid numbers for 'a', 'b',   and 'c'.";
      return;
    }

    const discriminant = b * b - 4 * a * c;

    // for real root
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      solutionRender.textContent = `Solutions: x₁ = ${x1}, x₂ = ${x2}`;
    }

    // for same root
    else if (discriminant === 0) {
      const x = -b / (2 * a);
      solutionRender.textContent = `Unique Solution: x = ${x}`;
    }

    // no solution / imaginary
    else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
      solutionRender.textContent = `Complex Solutions: x₁ = ${realPart.toFixed(
        4
      )} + ${imaginaryPart.toFixed(4)} i , x₂ = ${realPart.toFixed(
        4
      )} - ${imaginaryPart.toFixed(4)} i`;
    }
  });
});
