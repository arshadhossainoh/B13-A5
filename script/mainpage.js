const countIssue = document.getElementById("count-issue");

const cardContainer = document.getElementById("cardContainer");

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
    issueCard.className = "card bg-white p-5 shadow-md space-y-3";
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
            <button>${issue.labels[0]}</button>
            <button class="pl-2">${issue.labels.length === 2 ? issue.labels[1] : ""}</button>
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

loadAllIssues();
