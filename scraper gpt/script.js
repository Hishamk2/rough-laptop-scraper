document.addEventListener('DOMContentLoaded', () => 
  {
      const searchBox = document.getElementById('searchBox');
      const acerColumn = document.getElementById('acerColumn');
      const dellColumn = document.getElementById('dellColumn');
  
      const acerData = {
        "0": { "Link": "https://store.acer.com/en-ca/acer-chromebook-311-cb311-9h-c6qw", "Name": "Acer Chromebook 311 - CB311-9H-C6QW", "Price": "199.99", "Processor": "Intel® Celeron® N4020 processor", "RAM": "4 GB standard memory", "Storage": "32 GB Flash storage; SD Card reader" },
        "1": { "Link": "https://store.acer.com/en-ca/acer-chromebook-511-laptop-c741l-s40d", "Name": "Acer Chromebook 511 Laptop - C741L-S40D", "Price": "649.99", "Processor": "Qualcomm Kryo 468 processor", "RAM": "4 GB standard memory; 32 GB Flash storage", "Storage": "4 GB standard memory; 32 GB Flash storage" },
        "2": { "Link": "https://store.acer.com/en-ca/aspire-1-laptop-a115-32-c7zw", "Name": "Aspire 1 Laptop - A115-32-C7ZW", "Price": "399.99", "Processor": "Intel® Celeron® N4500 processor Dual-core 1.10 GHz", "RAM": "4 GB, DDR4 SDRAM", "Storage": "64 GB Flash Memory" },
        "3": { "Link": "https://store.acer.com/en-ca/acer-chromebook-512-c851t-c6b2", "Name": "Acer Chromebook 512 - C851T-C6B2", "Price": "489.99", "Processor": "Intel® Celeron® N4020 processor with integrated Wi-Fi 5", "RAM": "4 GB standard memory", "Storage": "32 GB Flash storage" },
        "4": { "Link": "https://store.acer.com/en-ca/acer-chromebook-712-c871t-c14r", "Name": "Acer Chromebook 712 - C871T-C14R", "Price": "489.99", "Processor": "Intel® Celeron® 5205U processor Dual-core 1.90 GHz", "RAM": "4 GB standard memory", "Storage": "32 GB Flash storage" },
        "5": { "Link": "https://store.acer.com/en-ca/acer-chromebook-315-cb315-3h-c7lj", "Name": "Acer Chromebook 315 - CB315-3H-C7LJ", "Price": "349.99", "Processor": "Intel® Celeron® N4020 processor", "RAM": "8 GB standard memory", "Storage": "64 GB Flash memory" },
        "6": { "Link": "https://store.acer.com/en-ca/acer-chromebook-314-c933t-c613", "Name": "Acer Chromebook 314 - C933T-C613", "Price": "349.99", "Processor": "Intel® Celeron® N4120 processor Quad-core 1.10 GHz", "RAM": "4 GB, LPDDR4", "Storage": "32 GB Flash Memory" },
        "7": { "Link": "https://store.acer.com/en-ca/aspire-go-15-laptop-ag15-31p-c99t", "Name": "Aspire Go 15 Laptop - AG15-31P-C99T", "Price": "399.99", "Processor": "Intel® N100 processor Quad-core", "RAM": "4 GB LPDDR5", "Storage": "128 GB SSD" },
        "8": { "Link": "https://store.acer.com/en-ca/acer-chromebook-314-c922-k5em", "Name": "Acer Chromebook 314 - C922-K5EM", "Price": "479.99", "Processor": "processors", "RAM": "4 GB standard memory", "Storage": "32 GB Flash Storage" },
        "9": { "Link": "https://store.acer.com/en-ca/acer-aspire-3-laptop-a315-23-r786", "Name": "Acer Aspire 3 Laptop A315-23-R786", "Price": "649.99", "Processor": "AMD Ryzen™ 3 3250U processor", "RAM": "4 GB DDR4 Memory", "Storage": "512 GB" }
    };
    
    const dellData = {
        "0": { "Name": "Inspiron 15 Laptop", "Price": "399.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "1": { "Name": "Inspiron 15 Laptop", "Price": "499.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "2": { "Name": "Inspiron 15 Laptop", "Price": "599.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "3": { "Name": "Inspiron 15 Laptop", "Price": "649.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "4": { "Name": "Inspiron 15 Laptop", "Price": "379.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "5": { "Name": "Inspiron 15 Laptop", "Price": "549.99", "Processor": "12th Gen Intel® Core™ i3-1215U", "RAM": "8 GB DDR4" },
        "6": { "Name": "Latitude 3340 Laptop", "Price": "1,063.62", "Processor": "13th Gen Intel® Core™ i3-1315U", "RAM": "8 GB LPDDR5" },
        "7": { "Name": "Latitude 3140 Laptop", "Price": "1,096.19", "Processor": "Intel® N200", "RAM": "8 GB LPDDR5X" },
        "8": { "Name": "Latitude 3140 Laptop", "Price": "526.21", "Processor": "Intel® N100", "RAM": "4 GB LPDDR5X" },
        "9": { "Name": "Latitude 3540 Laptop", "Price": "951.42", "Processor": "13th Gen Intel® Core™ i3-1315U", "RAM": "8 GB DDR4" }
    };
  
      // Prefixing keys to ensure unique keys for merging
      const prefixedAcerData = Object.fromEntries(Object.entries(acerData).map(([key, value]) => [`acer_${key}`, value]));
      const prefixedDellData = Object.fromEntries(Object.entries(dellData).map(([key, value]) => [`dell_${key}`, value]));
  
      const laptops = {...prefixedAcerData, ...prefixedDellData};
  
      searchBox.addEventListener('input', () => 
      {
          const query = searchBox.value.toLowerCase();
          acerColumn.innerHTML = '';
          dellColumn.innerHTML = '';
  
          Object.values(laptops).forEach(laptop => 
          {
              const combinedText = `${laptop.Name} ${laptop.Price} ${laptop.Processor} ${laptop.RAM} ${laptop.Storage}`.toLowerCase();
  
              if (combinedText.includes(query)) 
              {
                  const card = document.createElement('div');
                  card.className = `card ${laptop.Name.toLowerCase().includes('acer') ? 'acer' : 'dell'}`;
                  card.innerHTML = `
                      <h2>${laptop.Name}</h2>
                      <p><strong>Price:</strong> ${laptop.Price}</p>
                      <p><strong>Processor:</strong> ${laptop.Processor}</p>
                      <p><strong>RAM:</strong> ${laptop.RAM}</p>
                      <p><strong>Storage:</strong> ${laptop.Storage || 'N/A'}</p>
                      ${laptop.Link ? `<a href="${laptop.Link}" target="_blank">View Product</a>` : ''}
                  `;
  
                  if (laptop.Name.toLowerCase().includes('acer')) 
                  {
                      acerColumn.appendChild(card);
                  } 
                  else 
                  {
                      dellColumn.appendChild(card);
                  }
              }
          });
      });
  });
      