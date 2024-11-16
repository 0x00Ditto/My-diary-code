const submit = document.getElementById("btn-submit");
const reset = document.getElementById("btn-reset");
const inputField = document.getElementById("input-user");
const resultDiv = document.getElementById("result");

// Expressions régulières pour vérifier les types spécifiques de caractères dans un mot de passe.
const lowerCasePattern = /[a-z]/;
const upperCasePattern = /[A-Z]/;
const digitPattern = /\d/;
const nonAlphanumericPattern = /\W/;

submit.addEventListener("click", () => {
  const input = inputField.value;

  // Vérifier si l'input correspond à toutes les conditions
  const hasLowerCase = lowerCasePattern.test(input);
  const hasUpperCase = upperCasePattern.test(input);
  const hasDigit = digitPattern.test(input);
  const hasNonAlphanumeric = nonAlphanumericPattern.test(input);
  const isLongEnough = input.length >= 12;

  // Condition pour un mot de passe fort
  if (hasLowerCase && hasUpperCase && hasDigit && hasNonAlphanumeric && isLongEnough) {
    resultDiv.textContent = "Le mot de passe est fort!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Le mot de passe ne répond pas à toutes les exigences.";
    resultDiv.style.color = "red";

    // Afficher les conditions qui ne sont pas remplies
    const unmetConditions = [];
    if (!hasLowerCase) unmetConditions.push("Au moins une lettre minuscule");
    if (!hasUpperCase) unmetConditions.push("Au moins une lettre majuscule");
    if (!hasDigit) unmetConditions.push("Au moins un chiffre");
    if (!hasNonAlphanumeric) unmetConditions.push("Au moins un caractère spécial");
    if (!isLongEnough) unmetConditions.push("Minimum 12 caractères");

    resultDiv.innerHTML += "<br>Conditions non remplies :<br>" + unmetConditions.join("<br>");
  }
});

reset.addEventListener("click", () => {
  inputField.value = "";
  resultDiv.textContent = "";
});
