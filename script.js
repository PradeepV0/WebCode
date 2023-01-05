async function fetchData(){
    try {
     const response = await fetch("https://api.openbrewerydb.org/breweries"); 
     const data = await response.json();
     console.log(data);
     
     data.forEach(element => {
         const BreweriesRequired = {
            ...element, 
            name: element.name,
            type : element.brewery_type,
            street : element.street,
            address2: element.address_2,
            address3: element.address_3,
            city : element.city,
            state : element.state,
            postal : element.postal_code,
            country : element.country,
            url : element.website_url,
            contact : element.phone
         }
         createBreweries(BreweriesRequired)
         var options = {
            valueNames: [ 'name' ]
          };
          
          var userList = new List('users', options);
     });
     
    } catch (error) {
        console.log(error);
    }
}


function createBreweries({name, type, street, address2, address3, city, state, postal, country ,url, contact}) {

 document.querySelector(".list").innerHTML += `
 <tr>
 <td class="name">${name}</td>
 <td class="type">${type}</td>
 <td class="street">${street}</td>
 <td class="address2">${address2}</td>
 <td class="address3">${address3}</td>
 <td class="city">${city}</td>
 <td class="state">${state}</td>
 <td class="postal">${postal}</td>
 <td class="country">${country}</td>
 <td class="url">${url}</td>
 <td class="contact">${contact}</td>
</tr>
    `
}


fetchData();

