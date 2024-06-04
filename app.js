let cars = [];

function renderCarList() {
  const carList = document.getElementById('car-list');
  carList.innerHTML = ''; // Clear the list before adding new items
  cars.forEach((car, index) => {
    const carItem = document.createElement('li');
    carItem.innerHTML = `
      ${car.name} - ${car.make} ${car.model} (${car.year}) - $${car.price}
      <button onclick="removeCar(${index})">Remove</button>
    `;
    carList.appendChild(carItem);
  });
}

function addCar() {
  const name = document.getElementById('name').value;
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;

  if (name && make && model && year && price) {
    cars.push({ name, make, model, year: parseInt(year), price: parseFloat(price) });
    renderCarList();
    document.getElementById('name').value = '';
    document.getElementById('make').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('price').value = '';
  } else {
    alert('Please fill out all fields');
  }
}

function removeCar(index) {
  
  if (index >= 0 && index < cars.length) {
    cars.splice(index, 1); 
  } else {
    console.error("Invalid index for car removal"); 
  }
  renderCarList(); 
}
