//global variables and constants definition start here⬇️
const date = new Date();
let gEmployeesList = [];
let gfilter = "";
const EMPLOYEES_STORAGE_KEY = "employees";
whoIsUpdating = -1;

//functions start here⬇️
function addNewEmployee() {
  let empID;
  do {
    empID = makeId();
  } while (gEmployeesList.find((employee) => employee.empID === empID));
  const firstNameInp = document.querySelector(`#newEmpFirstName`);
  const lastNameInp = document.querySelector(`#newEmpLastName`);
  const ageInp = document.querySelector(`#newEmpAge`);
  const startingDateInp = document.querySelector(`#newEmpStartDate`);
  const departmentInp = document.querySelector(`#newEmpDep`);
  const salaryInp = document.querySelector(`#newEmpSalary`);
  if (
    firstNameInp.value &&
    lastNameInp.value &&
    ageInp.value &&
    departmentInp.value
  ) {
    gEmployeesList.push({
      empID: empID,
      firstName: firstNameInp.value,
      lastName: lastNameInp.value,
      age: ageInp.value,
      startDate: startingDateInp.value
        ? startingDateInp.value
        : `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      department: departmentInp.value,
      salary: salaryInp.value ? salaryInp.value : 5250,
    });
    firstNameInp.value = "";
    lastNameInp.value = "";
    ageInp.value = "";
    startingDateInp.value = "";
    departmentInp.value = "";
    salaryInp.value = "";
    saveToStorage(EMPLOYEES_STORAGE_KEY, gEmployeesList);
    renderEmployees();
  } else {
    alert("something went wrong. please check validation on each input box");
  }
}

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function renderEmployees() {
  const employeeList = document.querySelector(`.employees-list`);
  employeeList.innerHTML = "";
  let filteredEmployees = [];
  if (gfilter) {
    filteredEmployees = filterHandler();
  } else {
    filteredEmployees = gEmployeesList;
  }
  for (let i = 0; i < filteredEmployees.length; i++) {
    const currentEmployee = filteredEmployees[i];
    const elEmployee = document.createElement("div");
    elEmployee.classList.add("single-employee");
    elEmployee.setAttribute("id", `elEmp-${currentEmployee.empID}`);
    elEmployee.addEventListener("click", function (ev) {
      clickedOnEmployee(currentEmployee.empID);
    });
    const elName = document.createElement("h3");
    elName.textContent =
      currentEmployee.lastName + ", " + currentEmployee.firstName;
    elName.classList.add("full-name");
    const elInfo = document.createElement("h5");
    elInfo.classList.add("emp-info");
    elInfo.textContent =
      currentEmployee.age + ", " + currentEmployee.department;
    const description = document.createElement("p");
    description.textContent = `started working here in ${currentEmployee.startDate}.
    monthly salary is ${currentEmployee.salary}`;
    description.classList.add("department");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");
    elEmployee.appendChild(elName);
    elEmployee.appendChild(elInfo);
    elEmployee.appendChild(description);
    elEmployee.appendChild(buttonsDiv);
    employeeList.appendChild(elEmployee);
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clickedOnEmployee(empID) {
  const employeeElement = document.querySelector(`#elEmp-${empID}`);

  if (employeeElement) {
    const buttonsDiv = employeeElement.querySelector(".buttons-div");
    if (buttonsDiv.innerHTML) {
      buttonsDiv.innerHTML = "";
    } else {
      document
        .querySelectorAll(".single-employee")
        .forEach((currentEmployee) => {
          currentEmployee.querySelector(".buttons-div").innerHTML = "";
        });
      const updateBTN = document.createElement("button");
      updateBTN.textContent = "update";
      updateBTN.addEventListener("click", function () {
        updatingEmployee(empID);
      });
      const deleteBTN = document.createElement("button");
      deleteBTN.textContent = "delete";
      deleteBTN.classList.add("delete-btn");
      deleteBTN.addEventListener("click", function () {
        deletingEmployee(empID);
      });
      buttonsDiv.appendChild(updateBTN);
      buttonsDiv.appendChild(deleteBTN);
    }
  }
}

function updatingEmployee(empID) {
  // if (whoIsUpdating === -1) {
  whoIsUpdating = gEmployeesList.indexOf(
    gEmployeesList.find((employee) => employee.empID === empID)
  );
  const inputArea = document.querySelector("form");
  const currentEmployee = gEmployeesList[whoIsUpdating];
  inputArea.querySelector(`#newEmpFirstName`).value = currentEmployee.firstName;
  inputArea.querySelector("#newEmpLastName").value = currentEmployee.lastName;
  inputArea.querySelector("#newEmpAge").value = currentEmployee.age;
  inputArea.querySelector("#newEmpStartDate").value = currentEmployee.startDate;
  inputArea.querySelector("#newEmpDep").value = currentEmployee.department;
  inputArea.querySelector("#newEmpSalary").value = currentEmployee.salary;
  inputArea.querySelector(".submit-btn").textContent = "Update employee info";
  // const resetBtn = document.createElement("button");
  // resetBtn.textContent = "reset";
  // resetBtn.classList.add("reset-btn");
  // inputArea.appendChild(resetBtn);
  // whoIsUpdating = -1;
}

function finishUpdating(state) {
  // if (state !== "reset") {
  const firstNameInp = document.querySelector(`#newEmpFirstName`);
  const lastNameInp = document.querySelector(`#newEmpLastName`);
  const ageInp = document.querySelector(`#newEmpAge`);
  const startingDateInp = document.querySelector(`#newEmpStartDate`);
  const departmentInp = document.querySelector(`#newEmpDep`);
  const salaryInp = document.querySelector(`#newEmpSalary`);
  gEmployeesList[whoIsUpdating] = {
    empID: gEmployeesList[whoIsUpdating].empID,
    firstName: firstNameInp.value,
    lastName: lastNameInp.value,
    age: ageInp.value,
    startDate: startingDateInp.value,
    department: departmentInp.value,
    salary: salaryInp.value,
  };
  // document
  //   .querySelector("form")
  //   .removeChild(document.querySelector(".reset-btn"));
  // console.log(document.querySelector("form"));
  whoIsUpdating = -1;
  document.querySelector(".submit-btn").textContent = "Add new employee";
  firstNameInp.value = "";
  lastNameInp.value = "";
  ageInp.value = "";
  startingDateInp.value = "";
  departmentInp.value = "";
  salaryInp.value = "";
  saveToStorage(EMPLOYEES_STORAGE_KEY, gEmployeesList);
  renderEmployees();
  // }
}

function deletingEmployee(empID) {
  console.log(empID);

  console.log(gEmployeesList);

  gEmployeesList = gEmployeesList.filter(
    (employee) => employee.empID !== empID
  );
  console.log(gEmployeesList);
  saveToStorage(EMPLOYEES_STORAGE_KEY, gEmployeesList);
  console.log(gEmployeesList);
  renderEmployees();
  console.log("this deleting funcion will be added soon");
}

function filterTheEmployee() {
  const nameBtn = document.createElement("button");
  nameBtn.textContent = "name";
  nameBtn.addEventListener("click", function (ev) {
    buttonFilter(ev);
  });
  const ageBtn = document.createElement("button");
  ageBtn.textContent = "age";
  ageBtn.addEventListener("click", function (ev) {
    buttonFilter(ev);
    console.log("filtering by age will be added soon");
  });
  const depBtn = document.createElement("button");
  depBtn.textContent = "department";
  depBtn.addEventListener("click", function (ev) {
    buttonFilter(ev);
  });
  const dateBtn = document.createElement("button");
  dateBtn.textContent = "starting date";
  dateBtn.addEventListener("click", function (ev) {
    console.log("filtering by starting date will be added soon");
  });
  const salaryBtn = document.createElement("button");
  salaryBtn.textContent = "salary";
  salaryBtn.addEventListener("click", function (ev) {
    buttonFilter(ev);
    console.log("filtering by salary will be added soon");
  });
  document
    .querySelector(".filter-btn")
    .replaceWith(nameBtn, ageBtn, depBtn, dateBtn, salaryBtn);
  console.log("this filtering function will be added soon");
}

function buttonFilter(ev) {
  const filteringInp = document.querySelector(".filtering-input");
  gfilter += filteringInp
    ? filteringInp.value
    : ev.target.textContent.split(" ")[0];
  gfilter += "-";
  console.log(gfilter);
  const filteringDiv = document.querySelector(".filtering-div");
  filteringDiv.innerHTML = "";

  switch (ev.target.textContent) {
    case "name":
      const firstNameBtn = document.createElement("button");
      firstNameBtn.textContent = "first name";
      firstNameBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(firstNameBtn);
      const lastNameBtn = document.createElement("button");
      lastNameBtn.textContent = "last name";
      lastNameBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(lastNameBtn);

      break;

    case "age":
      const youngerAgeBtn = document.createElement("button");
      youngerAgeBtn.textContent = "younger";
      youngerAgeBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(youngerAgeBtn);
      const sameAgeBtn = document.createElement("button");
      sameAgeBtn.textContent = "same age";
      sameAgeBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(sameAgeBtn);
      const olderAgeBtn = document.createElement("button");
      olderAgeBtn.textContent = "older";
      olderAgeBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(olderAgeBtn);
      break;

    case "younger":
    case "older":
    case "same age":
    case "lower salary":
    case "exact salary":
    case "higher salary":
      const numericInp = document.createElement("Input");
      numericInp.setAttribute("type", "text");
      numericInp.setAttribute(
        "placeholder",
        `enter desire ${gfilter.split("-")[0]}`
      );
      numericInp.classList.add("filtering-input");
      numericInp.setAttribute("type", "number");
      numericInp.setAttribute("min", 18);
      const numericSearchBtn = document.createElement("button");
      numericSearchBtn.textContent = "search";
      filteringDiv.appendChild(numericInp);
      filteringDiv.appendChild(numericSearchBtn);
      numericSearchBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      break;

    case "department":
    case "first name":
    case "last name":
      const filterInp = document.createElement("Input");
      filterInp.setAttribute("type", "text");
      filterInp.setAttribute(
        "placeholder",
        `enter desire ${gfilter.split("-")[0]}`
      );
      filterInp.classList.add("filtering-input");
      const searchBtn = document.createElement("button");
      searchBtn.textContent = "search";
      filteringDiv.appendChild(filterInp);
      filteringDiv.appendChild(searchBtn);
      searchBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      break;

    case "starting date":
      break;

    case "salary":
      const lowerSalaryBtn = document.createElement("button");
      lowerSalaryBtn.textContent = "lower salary";
      lowerSalaryBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(lowerSalaryBtn);
      const exactSalaryBtn = document.createElement("button");
      exactSalaryBtn.textContent = "exact salary";
      exactSalaryBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(exactSalaryBtn);
      const higherSalaryBtn = document.createElement("button");
      higherSalaryBtn.textContent = "higher salary";
      higherSalaryBtn.addEventListener("click", function (ev) {
        buttonFilter(ev);
      });
      filteringDiv.appendChild(higherSalaryBtn);
      break;

    case "search":
      if (!filteringInp.value) {
        gfilter = "";
      }
      console.log(gfilter);
      renderEmployees();
      resetFilters();
      break;
  }
}

function filterHandler() {
  const filterKeys = gfilter.split("-");
  switch (filterKeys[0]) {
    case "name":
      switch (filterKeys[1]) {
        case "first":
          return gEmployeesList.filter(
            (employee) =>
              employee.firstName.toLowerCase() === filterKeys[2].toLowerCase()
          );
          break;
        case "last":
          return gEmployeesList.filter(
            (employee) =>
              employee.last.toLowerCase() === filterKeys[2].toLowerCase()
          );
          break;
      }
      break;

    case "department":
      return gEmployeesList.filter(
        (employee) =>
          employee.department.toLowerCase() === filterKeys[1].toLowerCase()
      );
      break;

    case "age":
      filterKeys[2] = Number(filterKeys[2]);
      switch (filterKeys[1]) {
        case "younger":
          return gEmployeesList.filter(
            (employee) => employee.age < filterKeys[2]
          );
          break;
        case "same":
          return gEmployeesList.filter(
            (employee) => employee.age === filterKeys[2]
          );
          break;
        case "older":
          return gEmployeesList.filter(
            (employee) => employee.age > filterKeys[2]
          );
          break;
      }
      break;

    case "starting date":
      break;

    case "salary":
      filterKeys[2] = Number(filterKeys[2]);
      switch (filterKeys[1]) {
        case "lower":
          return gEmployeesList.filter(
            (employee) => employee.salary < filterKeys[2]
          );
          break;
        case "exact":
          console.log("1: " + gEmployeesList[0].salary);
          console.log("2: " + gEmployeesList[gEmployeesList.length - 1].salary);
          return gEmployeesList.filter(
            (employee) => employee.salary === filterKeys[2]
          );
          break;
        case "higher":
          return gEmployeesList.filter(
            (employee) => employee.salary > filterKeys[2]
          );
          break;
      }
      break;
  }
}
function displayAll() {
  gfilter = "";
  renderEmployees();
  resetFilters();
  console.log("all are shown now");
}

function resetForm() {
  const elFormNewEmp = document.querySelector(`.add-employee`);
  const firstNameInp = elFormNewEmp.querySelector(`#newEmpFirstName`);
  const lastNameInp = elFormNewEmp.querySelector(`#newEmpLastName`);
  const ageInp = elFormNewEmp.querySelector(`#newEmpAge`);
  const startingDateInp = elFormNewEmp.querySelector(`#newEmpStartDate`);
  const departmentInp = elFormNewEmp.querySelector(`#newEmpDep`);
  const salaryInp = elFormNewEmp.querySelector(`#newEmpSalary`);
  firstNameInp.value = "";
  lastNameInp.value = "";
  ageInp.value = "";
  startingDateInp.value = "";
  departmentInp.value = "";
  salaryInp.value = "";
}

function resetFilters() {
  gfilter = "";
  const filteringDiv = document.querySelector(".filtering-div");
  filteringDiv.innerHTML = "";
  const btn = document.createElement("button");
  btn.textContent = "Display some";
  btn.classList.add("filter-btn");
  btn.addEventListener("click", filterTheEmployee);
  filteringDiv.appendChild(btn);
  //class="filter-btn" onclick="filterTheEmployee()"
}

//code start here⬇️
//to reset the data, remove this line (⬇️) from //, run the code once again, and put it back in //
// localStorage.removeItem(EMPLOYEES_STORAGE_KEY);
gEmployeesList = getFromStorage(EMPLOYEES_STORAGE_KEY)
  ? getFromStorage(EMPLOYEES_STORAGE_KEY)
  : [
      {
        empID: makeId(),
        firstName: "Alice",
        lastName: "Smith",
        age: 28,
        startDate: "2020-06-15",
        department: "Marketing",
        salary: 50000,
      },
      {
        empID: makeId(),
        firstName: "John",
        lastName: "Doe",
        age: 35,
        startDate: "2018-01-25",
        department: "Sales",
        salary: 60000,
      },
      {
        empID: makeId(),
        firstName: "Emma",
        lastName: "Johnson",
        age: 42,
        startDate: "2015-03-12",
        department: "IT",
        salary: 70000,
      },
      {
        empID: makeId(),
        firstName: "Michael",
        lastName: "Brown",
        age: 30,
        startDate: "2019-07-01",
        department: "Finance",
        salary: 55000,
      },
      {
        empID: makeId(),
        firstName: "Sophia",
        lastName: "Williams",
        age: 26,
        startDate: "2021-05-20",
        department: "HR",
        salary: 45000,
      },
      {
        empID: makeId(),
        firstName: "David",
        lastName: "Taylor",
        age: 39,
        startDate: "2017-09-14",
        department: "Operations",
        salary: 64000,
      },
      {
        empID: makeId(),
        firstName: "Laura",
        lastName: "White",
        age: 32,
        startDate: "2016-11-03",
        department: "Logistics",
        salary: 50000,
      },
    ]; //dummy default data
for (let i = 0; i < gEmployeesList.length; i++) {
  gEmployeesList[i].age = Number(gEmployeesList[i].age);
  gEmployeesList[i].salary = Number(gEmployeesList[i].salary);
}
renderEmployees();

const elFormNewEmp = document.querySelector(`.add-employee`);
elFormNewEmp.addEventListener("submit", function (ev) {
  ev.preventDefault();
  whoIsUpdating === -1
    ? addNewEmployee()
    : finishUpdating(ev.target.textContent);
});
