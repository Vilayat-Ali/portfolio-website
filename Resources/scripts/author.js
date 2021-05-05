// Storing data
fetch("../Resources/info/author.json")
    .then(function(response){
         return response.json();
    })
    .then(function(data){

        // Declaring variables
        const pic_frame = document.querySelector('.col-1');
        const name = document.querySelector('.Name');
        const role = document.querySelector('#roleAuthor');
        const  email = document.querySelector('.Email');
        const  linkedIn = document.querySelector('.LinkedIn');
        const  status = document.querySelector('.status');
        const  org = document.querySelector('.org');
        const  sch_status = document.querySelector('.sch_status');
        const Eventtable = document.querySelector('.tableData');


        // Saving fetched data
        var author_role = data.personal_info.Role;
        var author_name = data.personal_info.Name;
        var author_email = data.personal_info.Contacts.Email;
        var author_linkedIn = data.personal_info.Contacts.LinkedIn;
        var author_status = data.professional_info.status;
        var author_org = data.professional_info.organisation;
        var author_collab_status = data.collab_info.collab_status;
        var author_events = data.collab_info.events;
        var author_pic = data.personal_info.Photo;

        // Setting up the profile image
        var profile_pic = document.createElement('img');
        profile_pic.src = author_pic;
        profile_pic.style.width = "inherit";
        profile_pic.style.objectFit = "cover";
        pic_frame.appendChild(profile_pic);

        // Filling my name
        name.innerHTML = author_name;

        // Filling my roles
        for(roles in author_role){
            var li = document.createElement('li');
            li.innerHTML = author_role[roles];
            role.appendChild(li);
        }

        //Filling up Email
        email.innerHTML = author_email;

        //Filling up linkedIn
        linkedIn.innerHTML = author_linkedIn;

        //Filling up Status
        status.innerHTML = author_status;

        //Filling up organisation
        org.innerHTML = author_org;

        //Filling up Status
        sch_status.innerHTML = author_collab_status;

        //Filling up the Events
        var organizer  = [];
        for(var event in author_events){
            var name_event = data.collab_info.events[event].name_of_event;
            var performance = data.collab_info.events[event].performance;

            // Generating and Filling up the row
            var row = document.createElement('tr');

            // Filling up the name of the event
            var nameEvent = document.createElement('td');
            nameEvent.innerHTML = name_event;
            row.appendChild(nameEvent);

            // Filling up the organizers in that event
            for(var organizers in data.collab_info.events[event].organizer){
                var ul = document.createElement('ul');
                var li_org = document.createElement('li');
                li_org.innerHTML = data.collab_info.events[event].organizer[organizers]; 
                ul.appendChild(li_org);
                row.appendChild(ul);

            }

            // Filling up the performance in that particular event
            var eventPerformance = document.createElement('td');
            eventPerformance.innerHTML = performance;
            row.appendChild(eventPerformance);

            // Appending the generated row into the table
            Eventtable.appendChild(row);
        }

        
        
    });