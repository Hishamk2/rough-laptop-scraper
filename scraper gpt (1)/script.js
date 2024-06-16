const acerLaptops = [
  // Paste your Acer JSON data here
  {
    "0": {
        "Link": "https://store.acer.com/en-ca/acer-chromebook-311-cb311-9h-c6qw",
        "Name": "Acer Chromebook 311 - CB311-9H-C6QW",
        "Sale Type": "Not on sale",
        "Old Price": "Not on sale",
        "Price": "199.99",
        "Processor": "Intel\u00ae Celeron\u00ae N4020 processor",
        "GPU": "Intel\u00ae UHD Graphics 600",
        "RAM": "4 GB standard memory",
        "Storage": "32 GB Flash storage; SD Card reader"
    },
    "1": {
        "Link": "https://store.acer.com/en-ca/aspire-1-laptop-a115-32-c7zw",
        "Name": "Aspire 1 Laptop - A115-32-C7ZW",
        "Sale Type": "-25.00%",
        "Old Price": "399.99",
        "Price": "299.99",
        "Processor": "Intel\u00ae Celeron\u00ae N4500 processor Dual-core 1.10 GHz",
        "GPU": "Intel\u00ae UHD Graphics shared memory",
        "RAM": "4 GB, DDR4 SDRAM",
        "Storage": "64 GB Flash Memory"
    },
    "2": {
        "Link": "https://store.acer.com/en-ca/acer-chromebook-315-cb315-3h-c7lj",
        "Name": "Acer Chromebook 315 - CB315-3H-C7LJ",
        "Sale Type": "Not on sale",
        "Old Price": "Not on sale",
        "Price": "349.99",
        "Processor": "Intel\u00ae Celeron\u00ae N4020 processor",
        "GPU": "Intel\u00ae UHD Graphics 600",
        "RAM": "8 GB standard memory",
        "Storage": "64 GB Flash memory"
    }
}
];

const dellLaptops = [
  // Paste your Dell JSON data here
];

const searchBox = document.getElementById('search-box');
const acerResultsContainer = document.getElementById('acer-results');
const dellResultsContainer = document.getElementById('dell-results');

searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase(); 

    // Filter Acer Laptops
    const filteredAcer = Object.values(acerLaptops[0]).filter(laptop => { // Access the inner object
        return laptop.Name.toLowerCase().includes(searchTerm) ||
               laptop.Processor.toLowerCase().includes(searchTerm) 
               // ... add other fields to search 
    });

    // Filter Dell Laptops (same logic as Acer filtering, adjust for Dell's structure)
    const filteredDell = dellLaptops.filter(laptop => {
        // ... 
    });

    // Display Acer Results
    displayResults(filteredAcer, acerResultsContainer);

    // Display Dell Results
    displayResults(filteredDell, dellResultsContainer); 
});

function displayResults(laptops, container) {
    container.innerHTML = ""; // Clear previous results
    laptops.forEach(laptop => {
        const laptopDiv = document.createElement('div');
        laptopDiv.classList.add('laptop-result');

        laptopDiv.innerHTML = `
            <h3><a href="${laptop.Link}">${laptop.Name}</a></h3>
            <p>Price: ${laptop.Price}</p> 
            <p>Processor: ${laptop.Processor}</p>
            <p>RAM: ${laptop.RAM}</p>
            <p>Storage: ${laptop.Storage}</p>
            <!-- Add more details as needed -->
        `;
        container.appendChild(laptopDiv);
    });
}