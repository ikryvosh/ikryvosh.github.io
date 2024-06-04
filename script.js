<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Inventory</title>
</head>
<body>
    <h1>Car Inventory</h1>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" required><br>

        <label for="make">Make:</label>
        <input type="text" id="make" required><br>

        <label for="model">Model:</label>
        <input type="text" id="model" required><br>

        <label for="year">Year:</label>
        <input type="number" id="year" required><br>

        <label for="price">Price:</label>
        <input type="number" id="price" required><br>
    
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" required><br>

        <button type="button" onclick="addCar()">Add Car</button>
    </form>

    <ul id="car-list"></ul>

    <script>
        let cars = [];

        function renderCarList() {
            const carList = document.getElementById('car-list');
            carList.innerHTML = '';
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
            const phone = document.getElementById('phone').value;

            if (name && make && model && year && price && phone) {
                cars.push({ name, make, model, year: parseInt(year), price: parseFloat(price), phone });
                renderCarList();
                document.getElementById('name').value = '';
                document.getElementById('make').value = '';
                document.getElementById('model').value = '';
                document.getElementById('year').value = '';
                document.getElementById('price').value = '';
                document.getElementById('phone').value = ''; 
            } else {
                alert('Please fill out all fields');
            }
        }

        function removeCar(index) {
            cars.splice(index, 1);
            renderCarList();
        }
    </script>
</body>
</html>
