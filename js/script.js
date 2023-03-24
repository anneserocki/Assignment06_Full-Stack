// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form         = document.getElementById("addForm");
let table        = document.getElementById("employees");
totalRow         = 0

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById("empCount")
empCount.innerHTML = `Total: ${totalRow}`; 

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => document.getElementById(id);

    employeeID = $("id").value;
    employeeName = $("name").value;
    extension = $("extension").value;
    email = $("email").value;
    department = $("department").value;
    console.log(employeeID)

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelBtn = row.insertCell(); 
   
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let contentID = document.createTextNode(`${employeeID}`)
    cellID.appendChild(contentID);

    let contentName = document.createTextNode(`${employeeName}`)
    cellName.appendChild(contentName);

    let contentExtension = document.createTextNode(`${extension}`)
    cellExtension.appendChild(contentExtension);

    let contentEmail = document.createTextNode(`${email}`)
    cellEmail.appendChild(contentEmail);

    let contentDepartment =document.createTextNode(`${department}`)
    cellDepartment.appendChild(contentDepartment);    

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("id", "deleteBtn")
    deleteBtn.setAttribute("action", "click")
    deleteBtn.innerText = "Delete"
    cellDelBtn.appendChild(deleteBtn);    

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    let boxes = document.getElementsByTagName("input");
    boxes[0].focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    totalRow += 1;
    empCount.innerHTML = `Total: ${totalRow}`; 
})

// DELETE EMPLOYEE
table.addEventListener('click', function(e) {
    if (window.confirm("Are you sure you delete this employee?")) {
        if (e.target.tagName === 'BUTTON') {
        const row = e.target.parentNode.parentNode;
        const rowIndex = row.rowIndex;
        table.deleteRow(rowIndex);
        totalRow -= 1
        empCount.innerHTML = `Total: ${totalRow}`;  
        }
    }
  });

