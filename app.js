let contacts = [];
const createButton = document.getElementById("create");
createButton.addEventListener("click", handleFormSubmit);


function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    // event.preventDefault();
  
    // Get the values of the form fields
    const nameInput = document.getElementById("phonebook-name");
    const lonestarInput = document.getElementById("lonestar-number");
    const orangeInput = document.getElementById("orange-number");
    const pictureInput = document.getElementById("phonebook-picture");
  
    // Create a new contact object using the form field values
    const newContact = {
      name: nameInput.value,
      lonestarNumber: lonestarInput.value,
      orangeNumber: orangeInput.value,
      picture: pictureInput.files[0]
    };
  
    // Add the new contact to the list of contacts
    addContactToList(newContact);
  
    // Clear the form fields
    nameInput.value = "";
    lonestarInput.value = "";
    orangeInput.value = "";
    pictureInput.value = "";
  }

  function addContactToList(contact) {
    // Create a new list item element for the contact
    const listItem = document.createElement("li");
  
    // Add the contact's name to the list item
    const name = document.createElement("h3");
    name.textContent = contact.name;
    listItem.appendChild(name);
  
    // Add the contact's phone numbers to the list item
    const numbers = document.createElement("p");
    numbers.textContent = "Lonestar: " + contact.lonestarNumber + ", Orange: " + contact.orangeNumber;
    listItem.appendChild(numbers);
  
    // Add the contact's photo to the list item
    const picture = document.createElement("img");
    picture.src = URL.createObjectURL(contact.picture);
    listItem.appendChild(picture);
    
  
    // Add the list item to the list of contacts
    const list = document.getElementById("list");
    list.appendChild(listItem);
  }




