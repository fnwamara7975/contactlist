var contacts = [];

function emptyInputs() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("province").value = "";
  document.getElementById("postalCode").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("notes").value = "";
}

function displaySuccessMessage() {
  displaySuccessMessage.innerHTML = "";
  document.getElementById("success").innerHTML +=
    "<span class='successMessage'>Contact added successfully!</span>";
}

function createANewContact(
  firstName,
  lastName,
  address,
  city,
  province,
  postalCode,
  phone,
  email,
  notes
) {
  var contact = {
    firstName,
    lastName,
    address,
    city,
    province,
    postalCode,
    phone,
    email,
    notes,
  };
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var province = document.getElementById("province").value;
  var postalCode = document.getElementById("postalCode").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var notes = document.getElementById("notes").value;

  if (
    firstName == "" ||
    lastName == "" ||
    address == "" ||
    city == "" ||
    province == "" ||
    postalCode == "" ||
    phone == "" ||
    email == "" ||
    notes == ""
  ) {
    if (firstName == "") {
      document.getElementById("firstname-error").innerHTML +=
        "<span class='error'>First name is required</span>";
    }
    if (lastName == "") {
      document.getElementById("lastname-error").innerHTML +=
        "<span class='error'>Last name is required.</span>";
    }
    if (address == "") {
      document.getElementById("address-error").innerHTML +=
        "<span class='error'>Address is required.</span>";
    }
    if (city == "") {
      document.getElementById("city-error").innerHTML +=
        "<span class='error'>City is required.</span>";
    }
    if (province == "") {
      document.getElementById("province-error").innerHTML +=
        "<span class='error'>Province is required.</span>";
    }
    if (postalCode == "") {
      document.getElementById("postalCode-error").innerHTML +=
        "<span class='error'>Postal code is required.</span>";
    }
    if (phone == "") {
      document.getElementById("phone-error").innerHTML +=
        "<span class='error'>Phone is required.</span>";
    }
    if (email == "") {
      document.getElementById("email-error").innerHTML +=
        "<span class='error'>Email is required.</span>";
    }
    if (notes == "") {
      document.getElementById("notes-error").innerHTML +=
        "<span class='error'>Notes are required.</span>";
    }
    return;
  }

  if (email !== "") {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.getElementById("email-error").innerHTML +=
        "<span class='error'>Please enter a valid email address.</span>";
      return;
    }
  } else if (phone !== "") {
    var re = /[0-9][0-9][0-9](-)[0-9][0-9][0-9](-)[0-9][0-9][0-9][0-9]/;
    if (!re.test(phone)) {
      document.getElementById("phone-error").innerHTML +=
        "<span class='error'>Please enter a valid phone number.</span>";
      return;
    }
  } else {
    var re = /[0-9][a-zA-Z][0-9](-| |)[a-zA-Z][0-9][a-zA-Z]/;
    if (!re.test(postalCode)) {
      document.getElementById("postalCode-error").innerHTML +=
        "<span class='error'>Please enter a valid postal code.</span>";
      return;
    }
  }

  createANewContact(
    firstName,
    lastName,
    address,
    city,
    province,
    postalCode,
    phone,
    email,
    notes
  );
  displaySuccessMessage();
  emptyInputs();
});

document
  .getElementById("showAllContact")
  .addEventListener("click", function () {
    document.querySelector(".searchContact").style.display = "none";
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".contactList").style.display = "block";

    var contactList = document.querySelector(".contactList");
    var savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      contactList.innerHTML += `<div class="accordion" id="accordionExample">
          <h4 class="text-center">CONTACT LIST</h4>`;
      savedContacts.forEach(function (contact) {
        contactList.innerHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ${contact.firstName} ${contact.lastName}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <b>Address: </b>${contact.address}<br />
                <b>City: </b>${contact.city}<br />
                <b>Province: </b>${contact.province}<br />
                <b>Postal code: </b>${contact.postalCode}<br />
                <b>Phone: </b>${contact.phone}<br />
                <b>Email: </b>${contact.email}<br />
                <b>Note: </b>${contact.note}<br />
              </div>
            </div>
          </div>
          `;
      });
      contactList.innerHTML += `</div>`;
    } else {
      contactList.innerHTML += `<div class="accordion" id="accordionExample">
        <h4 class="text-center">CONTACT LIST</h4>`;
      contact.forEach(function (contact) {
        contactList.innerHTML += `
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ${contact.firstName} ${contact.lastName}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <b>Address: </b>${contact.address}<br />
              <b>City: </b>${contact.city}<br />
              <b>Province: </b>${contact.province}<br />
              <b>Postal code: </b>${contact.postalCode}<br />
              <b>Phone: </b>${contact.phone}<br />
              <b>Email: </b>${contact.email}<br />
              <b>Note: </b>${contact.note}<br />
            </div>
          </div>
        </div>
        `;
      });
      contactList.innerHTML += `</div>`;
    }
  });

document.getElementById("search").addEventListener("click", function () {
  document.querySelector(".searchContact").style.display = "block";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".contactList").style.display = "none";
});

document.getElementById("addNewContact").addEventListener("click", function () {
  document.querySelector(".searchContact").style.display = "none";
  document.querySelector(".contact").style.display = "block";
  document.querySelector(".contactList").style.display = "none";
});

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var searchText = document.getElementById("searchText").value;

  if (searchText === "") {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").innerHTML +=
      "<span class='error'>Field is required</span>";
    return;
  }

  var savedContacts = JSON.parse(localStorage.getItem("contacts"));
  const contactsFiltered = savedContacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log(contactsFiltered);

  var searchList = document.querySelector(".searchList");

  if (contactsFiltered.length === 0) {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").innerHTML +=
      "<span class='error'>There is no result for this name</span>";
  } else {
    searchList.innerHTML += `<div class="accordion" id="accordionExample">
          <h4 class="text-center">SEARCHED LIST</h4>`;
    contactsFiltered.forEach(function (contact) {
      searchList.innerHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ${contact.firstName} ${contact.lastName}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <b>Address: </b>${contact.address}<br />
                <b>City: </b>${contact.city}<br />
                <b>Province: </b>${contact.province}<br />
                <b>Postal code: </b>${contact.postalCode}<br />
                <b>Phone: </b>${contact.phone}<br />
                <b>Email: </b>${contact.email}<br />
                <b>Note: </b>${contact.note}<br />
              </div>
            </div>
          </div>
          `;
    });
    searchList.innerHTML += `</div>`;
  }
});
