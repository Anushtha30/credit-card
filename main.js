document.addEventListener('DOMContentLoaded', function() {
  const cardNumber = document.getElementById('card-number');
  const cardName = document.getElementById('card-name');
  const cardExpiry = document.getElementById('card-expiry');

  // Dummy data for demonstration
  const cardData = {
      number: '1234 5678 9012 3456',
      name: 'ANUSHTHA SHARMA',
      expiry: '8/38'
  };

  cardNumber.textContent = cardData.number;
  cardName.textContent = cardData.name;
  cardExpiry.textContent = cardData.expiry;
});
