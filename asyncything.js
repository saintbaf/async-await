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
      
        await iterateProducts(data);

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
          //console.log(value);
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



// The data that come back look something like this:
{
  "products": [
    {
      "title": "White Spiderweb Print Bikini",
      "collections": [
        { "name": "Accessories", "handle": "accessories" },
        { "name": "Product Endpoint", "handle": "product-endpoint-tester" }
      ],
      "available": true,
      "handle": "white-spiderweb-print-bikini",
      "id": 4331660804184,
      "featured_image": "White_Spiderweb_Bikini2.jpg",
      "secondary_image": "White_Spiderweb_BikiniTop2.jpg",      
      "options": [{ "name": "Title", "position": 1, "product_id": 4331660804184 }],
      "product_type": "Bikinis",
      "price": 14.99,
      "price_max": 14.99,
      "price_min": 14.99,
      "compare_at_price_max": 0.00,
      "compare_at_price_min": 0.00,
      "compare_at_price_varies": false,
      "tags": ["bikini", "spider", "spiderweb", "web", "white"],
      "splitTitle": "White Spiderweb Print Bikini",
      "splitColor": "White Spiderweb Print Bikini",
      "url": "/products/white-spiderweb-print-bikini",
      "vendor": "Docblack",
      "variants": [
        {
          "available": true,
          "id": 31257403752536,         
          "inventory_policy": "deny",
          "inventory_quantity": 100,
          "option1": "Size Free",
          "option2": "",
          "option3": "",
          "position": 1,
          "price": "1499",
          "requires_shipping": true,
          "sku": "DB345-WHT-0",
          "taxable": true,
          "title": "Size Free",
          "weight": 0.0,
          "weight_unit": "lb"
        }
      ]
    },

    ... ... .. .. . .
    ... ... .. ..
    ... ...



