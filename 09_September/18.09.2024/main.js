let gMissions = [
  {
    missionID: makeID(),
    isDone: false,
    missionName: "walk the dog",
  },
  {
    missionID: makeID(),
    isDone: true,
    missionName: "go to the gym",
  },
  {
    missionID: makeID(),
    isDone: false,
    missionName: "call grandma",
  },
];
const deletedMissions = [];
let counter = 1;
let isUpdating = false;
let isHiding = false;
let isHidingNew = false;
let isHidingOld = false;

function renderMissions() {
  let hasTODO = false;
  let hasCompleted = false;
  const temp = document.querySelectorAll("input");
  //   for (let i = 1; i < temp.length - 1; i++) {
  //     console.log(temp[i].id + ": " + temp[i].checked);
  //   }
  const elNewMissionsList = document.querySelector(".new-missions");
  elNewMissionsList.innerHTML = "";
  const elOldMissionsList = document.querySelector(".old-missions");
  elOldMissionsList.innerHTML = "";
  for (let i = 0; i < gMissions.length; i++) {
    const currentMission = gMissions[i];
    const elMission = document.createElement("li");
    elMission.innerHTML = `
             <input
              id="el-${currentMission.missionID}"
              type="checkbox"
              onchange="toggleMission('${currentMission.missionID}')"
              ${currentMission.isDone ? "checked" : ""}
            />
            <label id="txt-${currentMission.missionID}" for="el-${
      currentMission.missionID
    }">${currentMission.missionName}</label>
    ${
      currentMission.isDone
        ? ""
        : `<button onclick="updateMission('${currentMission.missionID}')">update</button>`
    }
        
        <button onclick="deleteMission('${
          currentMission.missionID
        }')">delete</button>
        `;
    const checkboxInput = document.querySelector(
      `#el-${currentMission.missionID}`
    );
    if (currentMission.isDone) {
      elOldMissionsList.appendChild(elMission);
      elMission.style.textDecoration = "line-through";
      hasCompleted = true;
    } else {
      //   document.querySelector(`#el-${currentMission.missionID}`).checked;
      elNewMissionsList.appendChild(elMission);
      hasTODO = true;
    }
  }
  //   if (!hasTODO) {
  //     //     document.querySelector(`.todo-missions`).style.display = "none";
  //     //   } else {
  //     //     document.querySelector(`.todo-missions`).style.display = "block";
  //     //   }
  //     isHidingNew = true;
  //     document.querySelector(`#hideNewMissions`).checked = true;
  //     hidingNewMissions();
  //   } else {
  //     isHidingNew = false;
  //     document.querySelector(`#hideNewMissions`).checked = true;
  //     hidingNewMissions();
  //   }
  isHidingNew = !hasTODO;
  document.querySelector(`#hideNewMissions`).checked = !hasTODO;
  hidingNewMissions();
  isHidingOld = !hasCompleted;
  document.querySelector(`#hideOldMissions`).checked = !hasCompleted;
  hidingOldMissions();
}

function toggleMission(receivedID) {
  for (let i = 0; i < gMissions.length; i++) {
    if (gMissions[i].missionID === receivedID) {
      const isChecked = !gMissions[i].isDone;
      console.log(document.querySelector(`#el-${receivedID}`));
      //   document.querySelector(`#el-${receivedID}`).checked = !document.querySelector(`#el-${receivedID}`).checked;
      //   console.log(document.querySelector(`#el-${receivedID}`));
      gMissions[i].isDone = !gMissions[i].isDone;
      //   document.querySelector(".new-missions").innerHTML = "";
      //   document.querySelector(".old-missions").innerHTML = "";
      renderMissions();
      return;
    }
  }
}

function deleteMission(receivedID) {
  const newMissions = [];
  gMissions.forEach((mission) => {
    if (mission.missionID !== receivedID) {
      newMissions.push(mission);
    } else {
      deletedMissions.push(mission);
    }
  });
  gMissions = newMissions;
  renderMissions();
}

function unDeletingMissions() {
  if (deletedMissions.length > 0) {
    gMissions.push(deletedMissions.pop());
  }
  console.log(gMissions);
  renderMissions();
}

function updateMission(receivedID) {
  console.log(gMissions);
  const inputCheckbox = document.getElementById(`el-${receivedID}`);
  //   const inputCheckbox = document.querySelector(`#el-${receivedID}`);
  if (inputCheckbox.classList.contains("updating")) {
    const newInput = document.querySelector(`#inp-${receivedID}`);
    const missionTxt = document.createElement("label");
    missionTxt.for = `el-${receivedID}`;
    missionTxt.setAttribute("id", `txt-${receivedID}`);
    console.log("                                           ");
    console.log(newInput);
    console.log(missionTxt);
    missionTxt.textContent = newInput.value
      ? newInput.value
      : `New Task ${counter++}`;
    newInput.replaceWith(missionTxt);
    // isUpdating = false;
    for (let i = 0; i < gMissions.length; i++) {
      if (gMissions[i].missionID === receivedID)
        gMissions[i].missionName = missionTxt.textContent;
    }
  } else {
    const missionTxt = document.querySelector(`#txt-${receivedID}`);
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = missionTxt.textContent;
    newInput.setAttribute("id", `inp-${receivedID}`);
    missionTxt.replaceWith(newInput);
    // isUpdating = true;
  }
  inputCheckbox.classList.toggle("updating");
}

function addMission() {}

function createMission(name) {
  gMissions.push({
    missionID: makeID(),
    isDone: false,
    missionName: name,
  });
  renderMissions();
}

function makeID() {
  let id = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 5; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return id;
}
console.log(gMissions);
renderMissions();

const elForm = document.querySelector("form");
console.log(elForm);
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const input = elForm.querySelector("#todoInput");
  let nameValue = input.value;
  input.value = "";
  nameValue = nameValue ? nameValue : `New Task ${counter++}`;
  createMission(nameValue);
});

function hidingNewMissions() {
  const list = document.querySelector(`.todo-missions`);
  if (isHidingNew) {
    list.style.display = "none";
    document.querySelector("#newMissionsLabel").textContent =
      "un-hide missions need to be done";
  } else {
    list.style.display = "block";
    document.querySelector("#newMissionsLabel").textContent =
      "hide missions need to be done";
  }
}

function hidingOldMissions() {
  const list = document.querySelector(`.completed-missions`);
  if (isHidingOld) {
    list.style.display = "none";
    document.querySelector("#oldMissionsLabel").textContent =
      "un-hide completed missions";
  } else {
    list.style.display = "block";
    document.querySelector("#oldMissionsLabel").textContent =
      "hide completed missions";
  }
}

function easterEgg() {
  alert(
    `why did you press on the headline? what did you think that would happen? its just an headline...

                            anyway you just got rick-rolled
                             *🥁drums starting to play*`
  );
  document.querySelector("h1").textContent =
    "🎼Never Gonna Give You Up Never Gonna Let You Down🎼";
}

function allCompleted() {
  gMissions.forEach((mission) => {
    mission.isDone = true;
  });
  renderMissions();
}

function allNew() {
  gMissions.forEach((mission) => {
    mission.isDone = false;
  });
  renderMissions();
}

function hidingThemAll(state) {
  document.querySelector("#hideAll").checked = state;
  if (state) {
    document.querySelector("#hideAllLabel").textContent = "un-hide all";
  } else {
    document.querySelector("#hideAllLabel").textContent = "hide all";
  }
}

function hidingHandler(state) {
  switch (state) {
    case 1:
      isHidingNew = !isHidingNew;
      hidingNewMissions();
      break;
    case 2:
      isHidingOld = !isHidingOld;
      hidingOldMissions();
      break;
    case 3:
      const hideAllInput = document.querySelector("#hideAll");
      if (hideAllInput.checked) {
        isHidingNew = true;
        isHidingOld = true;
        document.querySelector(`#hideNewMissions`).checked = true;
        document.querySelector(`#hideOldMissions`).checked = true;
        // hideAllLabel.textContent = "un-hide all";
      } else {
        isHidingNew = false;
        isHidingOld = false;
        document.querySelector(`#hideNewMissions`).checked = false;
        document.querySelector(`#hideOldMissions`).checked = false;
        // hideAllLabel.textContent = "hide all";
      }
      hidingNewMissions();
      hidingOldMissions();
  }
  hidingThemAll(isHidingNew & isHidingOld);
  renderMissions();
}

{
  // const checkBox = document.querySelector(".mission-checkbox");
  // checkBox.addEventListener("change", function (ev) {
  //   console.log(ev.target);
  //   ev.target.isDone = !ev.target.isDone;
  //   console.log(ev.target);
  //   renderMissions();
  // });

  function logging(id) {
    console.log(`the received id ${id}`);
    //   document.querySelector("#checkBox").ch
    for (let i = 0; i < gMissions.length; i++) {
      if (gMissions[i].missionID === id) {
        console.log(gMissions[i]);
        console.log(gMissions[i].isDone);
        gMissions[i].isDone = !gMissions[i].isDone;
        console.log(gMissions[i].isDone);
        console.log(gMissions[i]);
        renderMissions();
        console.log("-");
        return;
      }
    }
  }
}
