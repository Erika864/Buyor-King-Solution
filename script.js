document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const telephone = document.getElementById('telephone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulation de soumission
  alert(`Merci ${nom}, votre message a été envoyé !`);
  // Nettoyer le formulaire
  this.reset();
});

