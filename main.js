

    const birthdate = new Date("1991-11-08");
    const currentDate = new Date();

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor((currentDate - birthdate) / millisecondsPerDay);

    const yearsPassed = (daysPassed / 365).toFixed(1);

    const nombreJour = document.getElementById("nbjours");
    nombreJour.textContent = daysPassed;
    const nombreAnnee = document.getElementById("annee");
    nombreAnnee.textContent = yearsPassed;

console.log(`Nombre de jours passés depuis la naissance : ${daysPassed} jours`);
console.log(`Nombre d'années passées : ${yearsPassed} ans`);