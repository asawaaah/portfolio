

    const birthdate = new Date("1991-11-08");
    const currentDate = new Date();

    const hoursPerDay = 24;
    const daysPassed = Math.floor((currentDate - birthdate) / hoursPerDay);

    const yearsPassed = (daysPassed / 365).toFixed(1);

    resultElement.textContent = `Nombre de jours passés depuis la naissance : ${daysPassed} jours\nNombre d'années passées : ${yearsPassed} ans`;
});