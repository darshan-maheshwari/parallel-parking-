document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const parkingSpot = document.querySelector('.parking-spot');
    let position = { x: 80, y: 50 }; // Initial position

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (position.y > 0) position.y -= 5;
                break;
            case 'ArrowDown':
                if (position.y < 100) position.y += 5;
                break;
            case 'ArrowLeft':
                if (position.x > 0) position.x -= 5;
                break;
            case 'ArrowRight':
                if (position.x < 100) position.x += 5;
                break;
        }
        car.style.top = `${position.y}%`;
        car.style.left = `${position.x}%`;
        checkParking();
    });

    function checkParking() {
        const carRect = car.getBoundingClientRect();
        const spotRect = parkingSpot.getBoundingClientRect();
        
        if (
            carRect.top >= spotRect.top &&
            carRect.left >= spotRect.left &&
            carRect.bottom <= spotRect.bottom &&
            carRect.right <= spotRect.right
        ) {
            parkingSpot.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
            alert('Great job! You parked the car!');
        } else {
            parkingSpot.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
        }
    }
});
