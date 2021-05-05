// Storing data
var name = document.querySelector(".name");
var email = document.querySelector(".contact-email");

fetch("../Resources/info/author.json")
  .then(function(response) {
    return response.json();
  }).then(function(data){

    var role = data.personal_info.Role;
    var author_name = data.personal_info.Name;
    console.log(author_name);
    var email = data.personal_info.Contacts.Email;
    var linkedIn = data.personal_info.Contacts.LinkedIn;
    var status = data.professional_info.status;
    var organisation = data.professional_info.organisation;
    var sch_status = data.collab_info.collab_status;

    const name = document.querySelector(".Name");
    const Email = document.querySelector(".Email");
    const LinkedIn = document.querySelector(".LinkedIn");
    const Status = document.querySelector('.status');
    const org = document.querySelector('.org');
    const sch = document.querySelector('.sch_status');
    const tableData = document.querySelector('.tableData');
    
    var events = [];

    for(el in role){
      const roleAuthor = document.getElementById('roleAuthor');

      var listItem = document.createElement('li');
      listItem.className = "listItem";
      var infowriter = document.createElement('p');
      infowriter.className = "infowriter";
      infowriter.innerText = role[el];
      listItem.appendChild(infowriter);
      roleAuthor.appendChild(listItem);
    }

    name.innerText = author_name;
    Email.innerText = email;
    LinkedIn.innerText = linkedIn;
    Status.innerText = status;
    org.innerText = organisation;
    sch.innerText = sch_status;

    const events = data.collab_info.events;
    for(el in events){
      var table = document.querySelector('.tableData');
      var row = document.createElement('tr');
      var rowData_name_event = document.createElement('td');
      rowData_name_event.innerHTML = events[el].name_of_event;

      var row_org = document.createElement('td');
      var td_ul = document.createElement('ul');

      for(x in events[el].organizer){
        var li = document.createElement('li');
        li.innerHTML = events[el].organizer[x];
        td_ul.appendChild(li);
      }
      
      row_org.appendChild(td_ul);
      tableData.appendChild(row_org);
    
      var rowData_performance = document.createElement('td');
      rowData_performance.innerHTML = events[el].performance;

      row.appendChild(rowData_name_event);
      row.appendChild(row_org);
      row.appendChild(rowData_performance);

      table.appendChild(row);
    }
  });