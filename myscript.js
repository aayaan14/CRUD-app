var rollV, nameV, genderV, addressV;

// Function to Read the Form
function readForm() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
}

// Function to show a roll number not found alert
function showRollNumberNotFoundAlert() {
  alert("Roll number not found in the database");
}

// onclick = Insert
document.getElementById("insert").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

// onclick = Read by creating snaps
document.getElementById("read").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      if (snap.exists()) {
        document.getElementById("roll").value = snap.val().rollNo;
        document.getElementById("name").value = snap.val().name;
        document.getElementById("gender").value = snap.val().gender;
        document.getElementById("address").value = snap.val().address;
      } else {
        // Roll number not found, show alert
        showRollNumberNotFoundAlert();
      }
    });
};

// onclick = Update
document.getElementById("update").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

// onclick = Delete
document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
