const countIssue = document.getElementById("count-issue");

const cardContainer = document.getElementById("cardContainer");
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");
let openIssues = [];
let closedIssues = [];
// let currentStatus = "all";

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
    issueCard.className =
      "card bg-white p-5 shadow-md space-y-3 hover:cursor-pointer";
    issueCard.innerHTML = `
  
          <!-- card top part  -->
          <div class="flex justify-between">
            <img class="" src="./assets/Open-Status.png" alt="" />
            <button class="bg-[#FEECEC] text-red-400 p-2">HIGH</button>
          </div>
          <!-- card middle part  -->
          <div>
            <h3 class="font-bold">${issue.title}</h3>
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

// function toggleBtn(id) {
//   // console.log(id);
//   // adding gray for all
//   allBtn.classList.add("bg-gray-300", "text-black");
//   openBtn.classList.add("bg-gray-300", "text-black");
//   closedBtn.classList.add("bg-gray-300", "text-black");

//   // remove btns previous colors

//   allBtn.classList.remove("bg-blue-600", "text-white");
//   openBtn.classList.remove("bg-white", "text-black");
//   closedBtn.classList.remove("bg-white", "text-black");

//   const selected = document.getElementById(id);
//   currentStatus = id;

//   selected.classList.remove("bg-gray-300", "text-black");
//   selected.classList.add("bg-blue-600", "text-black");
// }

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

// openBtn.addEventListener("click", async () => {
//   // console.log("open btn clicked");
//   const res = await fetch(
//     "https://phi-lab-server.vercel.app/api/v1/lab/issues",
//   );
//   const data = await res.json();
//   const allIssues = data.data;
//   const openStatus = allIssues.filter((issue) => issue.status == "open");
//   openIssues.push(openStatus);
//   displayOpen(openIssues);
// });

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
            <button class="bg-[#FEECEC] text-red-400 p-2">HIGH</button>
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
            <button class="bg-[#FEECEC] text-red-400 p-2">HIGH</button>
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

openBtn.addEventListener("click", pullData);
closedBtn.addEventListener("click", pullClosedData);

loadAllIssues();

//  <p>${issue.status == "open" ? (issueCard.style.background = "green") : (issueCard.style.background = "purple")}</p>
