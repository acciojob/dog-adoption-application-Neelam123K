//your code here
const form = document.getElementById('dogForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent real submission

      const checkbox = document.getElementById('dogExperience');
      const isChecked = checkbox.checked;

      alert("Checkbox checked: " + (isChecked ? "Yes" : "No"));

      // You can access all fields here too:
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;

      console.log("Form submitted with:");
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Address:", address);
      console.log("Lived with dog before:", isChecked);
    });