let currentSlide = 0;

const images = [
    {
        src: "aa6dpucis-removebg-preview.png",
        model: "BMW 1996",
        engine: "2.5L Inline-6",
        power: "189 hp",
        price: "$22,000",
        year: "1996",
        description: "The BMW 1996 model is a classic luxury sports sedan offering a smooth driving experience."
    },
    {
        src: "rsz_1184-1846087_bmw-side-view-png-free-download-porsche-911-removebg-preview.png",
        model: "Porsche 911",
        engine: "3.0L Twin-Turbocharged Flat-6",
        power: "379 hp",
        price: "$105,000",
        year: "2024",
        description: "The Porsche 911 is a high-performance sports car, known for its precision and iconic design."
    },
    {
        src: "ferari-removebg-preview.png",
        model: "Ferrari F8 Tributo",
        engine: "3.9L Twin-Turbo V8",
        power: "710 hp",
        price: "$280,000",
        year: "2024",
        description: "The Ferrari F8 Tributo combines extreme power with precision engineering, offering a thrilling driving experience."
    }
];

// Function to move the slide based on the direction (-1 for prev, 1 for next)
function moveSlide(direction) {
    currentSlide += direction;
    
    // Wrap around the images if reaching the end or the beginning
    if (currentSlide < 0) currentSlide = images.length - 1;
    if (currentSlide >= images.length) currentSlide = 0;
    
    // Update the image source
    document.getElementById('carImage').src = images[currentSlide].src;

    // Update the car information
    document.getElementById('carModel').textContent = images[currentSlide].model;
    document.querySelector("#carInfo p:nth-child(2)").textContent = `Engine: ${images[currentSlide].engine}`;
    document.querySelector("#carInfo p:nth-child(3)").textContent = `Power: ${images[currentSlide].power}`;
    document.querySelector("#carInfo p:nth-child(4)").textContent = `Price: ${images[currentSlide].price}`;
    document.querySelector("#carInfo p:nth-child(5)").textContent = `Year: ${images[currentSlide].year}`;
    document.querySelector("#carInfo p:nth-child(6)").textContent = `Description: ${images[currentSlide].description}`;
}
