  const theCollectionTitle = '{{ collection.title }}';  
  console.log(theCollectionTitle);
  const productsEndpoint = '... ... ... /product-endpoint-tester';

  async function getProducts() {  
     try {        
        const result = await fetch(productsEndpoint);
        console.log('Fetch Endpoint promise resolved \n');    
        console.log(result);
        console.log('~~~~~ \n \n'); 

        const data = await result.json();
        console.log('The promised Endpoint Data have been JSONed \n');    
        console.log(typeof data, data);  
        console.log('~~~~~ \n \n'); 
      
        iterateProducts(data);

     } catch(error) {  
        console.log('A wild SNAFU appears \n');
        console.log('FUBAReason: ', error);
        console.log('~~~~~ \n \n'); 
     }   
  }
   
  // Iterate the products
  async function iterateProducts(data) {
    
    for (i in data.products) {
      for (const [key, value] of Object.entries(data.products[i])) {
        if(value === theCollectionTitle) { 
          console.log(value);
          console.log(data.products[i].title);
          console.log(data.products[i].available);
          console.log(data.products[i].handle);
          
          // This works
          const theTitle = data.products[i].title;
          console.log('Title: ', theTitle);
          
          // This does not work
          //const { pTitle, pAvailable, pHandle } = data.products[i];
          //console.log(pTitle, pAvailable, pHandle);
        }
      }
    }
    
  }
  
  // Run the thing 
  getProducts();
