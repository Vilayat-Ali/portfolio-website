fetch("../Resources/info/documentation.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var documentation_data = data.documentation;
        const table = document.querySelector('.table-download');

       for(var projects in documentation_data){
           var name_of_project = documentation_data[projects].name;
           var project_about = documentation_data[projects].about_project;
           var path_of_project = documentation_data[projects].path;
            // Setting download file name
           var fname = name_of_project+"-doc";
           // Generating a new row 
           var row = document.createElement('tr');
           // Generating a new td
           var name_pro = document.createElement('td');
           name_pro.innerHTML = name_of_project;
           row.appendChild(name_pro);
           //Generating about
           var about_pro = document.createElement('td');
           about_pro.innerHTML = project_about;
           row.appendChild(about_pro);
           // Generating Download link
           var download_link = document.createElement('td');
           download_link.className = "link_style";
                //generating the link
            var link = document.createElement('a');
            link.href = path_of_project;
            link.innerHTML = "Download from here"
            link.setAttribute("Download", fname);
            download_link.appendChild(link);
            row.appendChild(download_link);
            table.appendChild(row);
       } 
    });