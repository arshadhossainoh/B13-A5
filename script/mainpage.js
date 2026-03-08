const countIssue = document.getElementById("count-issue");

const cardContainer = document.getElementById("cardContainer");
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");
const issueDetailsModal = document.getElementById("issue_details_modal");
const modalTitle = document.getElementById("modalTitle");
const modalStatus = document.getElementById("modal-status");
const modalAuthor = document.getElementById("modal-author");
const modalDate = document.getElementById("modal-date");
const modalBug = document.getElementById("modal-bug");
const modalHelpWanted = document.getElementById("modal-help-wanted");
const modalDes = document.getElementById("modal-des");
const modalAssignee = document.getElementById("assignee");
const modalpriority = document.getElementById("priority");
let openIssues = [];
let closedIssues = [];

async function loadAllIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  // console.log(data.data);
  displayAllIssues(data.data);
  countIssue.textContent = data.data.length;
}

// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }

function displayAllIssues(issues) {
  console.log(issues);

  issues.forEach((issue) => {
    const issueCard = document.createElement("div");
    // issueCard.className =
    //   "card bg-white p-5 shadow-md space-y-3 hover:cursor-pointer";
    issueCard.className = `${issue.status == "open" ? "card bg-white border-t border-green-500 p-5 shadow-md space-y-3 hover:cursor-pointer" : "card bg-white border-t border-purple-500 p-5 shadow-md space-y-3 hover:cursor-pointer"}`;
    issueCard.innerHTML = `
  
          <!-- card top part  -->
          <div class="flex justify-between">
            <img class="" src="./assets/Open-Status.png" alt="" />
            <button class="bg-[#FEECEC]  p-2">${issue.priority}</button>
          </div>
          <!-- card middle part  -->
          <div onclick="openIssueModal(${issue.id})">
            <h3 class="font-bold" >${issue.title}</h3>
            <p class="pb-3">
              ${issue.description}
            </p>
            
            <button class="bg-yellow-200">${issue.labels[0]}</button>
            <button class="pl-2 bg-yellow-200">${issue.labels.length === 2 ? issue.labels[1] : ""}</button>
          </div>
          <hr class="text-gray-300" />
          <!-- card bottom part  -->
          <div class="">
           
            <p>#${issue.id} by ${issue.author} &nbsp; &nbsp; ${issue.createdAt} </p>
             <br />
            <p>Assignee: ${issue.assignee} &nbsp; &nbsp; updated: ${issue.updatedAt} </p>
          
           </div>
      
    `;
    cardContainer.appendChild(issueCard);
  });
}

async function pullData() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const allIssues = data.data;
  const openStatus = allIssues.filter((issue) => issue.status == "open");
  openIssues.push(openStatus);

  // displayOpen(openIssues[0]);
  displayOpen(...openIssues);
}

async function pullClosedData() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const allIssues = data.data;
  const closedStatus = allIssues.filter((issue) => issue.status == "closed");
  closedIssues.push(closedStatus);
  displayClosed(...closedIssues);
}

function displayOpen(issues) {
  console.log(issues);
  cardContainer.innerHTML = "";
  issues.forEach((issue) => {
    const issueCard = document.createElement("div");
    issueCard.className =
      "card bg-white p-5 shadow-md space-y-3 hover:cursor-pointer";
    issueCard.innerHTML = `
  
          <!-- card top part  -->
          <div class="flex justify-between">
            <img class="" src="./assets/Open-Status.png" alt="" />
            <button class="bg-[#FEECEC]  p-2">${issue.priority}</button>
          </div>
          <!-- card middle part  -->
          <div>
            <h3 class="font-bold">${issue.title}</h3>
            <p class="pb-3">
              ${issue.description}
            </p>
            <button class="bg-yellow-200">${issue.labels?.[0]}</button>
            <button class="pl-2 bg-yellow-200">${issue.labels?.length === 2 ? issue.labels[1] : ""}</button>
          </div>
          <hr class="text-gray-300" />
          <!-- card bottom part  -->
          <div class="">
        
            <p>#${issue.id} by ${issue.author} &nbsp; &nbsp; ${issue.createdAt} </p>
             <br />
            <p>Assignee: ${issue.assignee} &nbsp; &nbsp; updated: ${issue.updatedAt} </p>
          
           </div>
      
    `;

    cardContainer.appendChild(issueCard);
  });
  countIssue.textContent = openIssues[0].length;
}

function displayClosed(issues) {
  console.log(issues);
  cardContainer.innerHTML = "";
  issues.forEach((issue) => {
    const issueCard = document.createElement("div");
    issueCard.className =
      "card bg-white p-5 shadow-md space-y-3 hover:cursor-pointer";
    issueCard.innerHTML = `
  
          <!-- card top part  -->
          <div class="flex justify-between">
            <img class="" src="./assets/Open-Status.png" alt="" />
            <button class="bg-[#FEECEC]  p-2">${issue.priority}</button>
          </div>
          <!-- card middle part  -->
          <div>
            <h3 class="font-bold">${issue.title}</h3>
            <p class="pb-3">
              ${issue.description}
            </p>
            <button class="bg-yellow-200">${issue.labels?.[0]}</button>
            <button class="pl-2 bg-yellow-200">${issue.labels?.length === 2 ? issue.labels[1] : ""}</button>
          </div>
          <hr class="text-gray-300" />
          <!-- card bottom part  -->
          <div class="">
        
            <p>#${issue.id} by ${issue.author} &nbsp; &nbsp; ${issue.createdAt} </p>
             <br />
            <p>Assignee: ${issue.assignee} &nbsp; &nbsp; updated: ${issue.updatedAt} </p>
          
           </div>
      
    `;

    cardContainer.appendChild(issueCard);
  });
  countIssue.textContent = closedIssues[0].length;
}

function toggleBtns(id) {
  const btns = [allBtn, openBtn, closedBtn];
  for (let btn of btns) {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-soft");
  }
  if (id == "all-btn") {
    allBtn.classList.remove("btn-soft");
    allBtn.classList.add("btn-primary");
    loadAllIssues();
  } else if (id == "open-btn") {
    openBtn.classList.remove("btn-soft");
    openBtn.classList.add("btn-primary");
    // allBtn.classList.remove("btn-primary");
    // closedBtn.classList.add("btn-soft");
  } else {
    closedBtn.classList.remove("btn-soft");
    closedBtn.classList.add("btn-primary");
    // openBtn.classList.remove("btn-primary");
    // allBtn.classList.add("btn-soft");
  }
}

async function openIssueModal(issueid) {
  console.log(issueid);
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueid}`,
  );
  const data = await res.json();
  const issueDetails = data.data;
  // console.log(data.data);
  issueDetailsModal.showModal();
  modalTitle.textContent = issueDetails.title;
  modalStatus.textContent = issueDetails.status;
  modalAuthor.textContent = issueDetails.author;
  modalDate.textContent = issueDetails.createdAt;
  modalBug.textContent = issueDetails.labels?.[0];
  modalHelpWanted.textContent = issueDetails.labels?.[1];
  modalDes.textContent = issueDetails.description;
  modalAssignee.textContent = issueDetails.assignee;
  modalpriority.textContent = issueDetails.priority;
}

openBtn.addEventListener("click", pullData);
closedBtn.addEventListener("click", pullClosedData);

loadAllIssues();

//  <p>${issue.status == "open" ? (issueCard.style.background = "green") : (issueCard.style.background = "purple")}</p>
