fetch("../Resources/info/projects.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var projects = data.projects;

        var base = document.querySelector('.base');

        // Looping through the list of projects
        for(var project in projects){
            // generating container-main
            var container_main = document.createElement('div');
            container_main.className = "container-main";

            // Declaring necessary variables
            var name_project = projects[project].name;
            var status_project = projects[project].status;
            var version_project = projects[project].version;
            var language_project = projects[project].language;
            var platform_project = projects[project].platform;
            var available_at_project = projects[project].available_at;
            var pic_project = projects[project].logo;
            var project_des = projects[project].description;

            // Generating the project div
            var project_div = document.createElement('div');
            project_div.className = "container-project";

            // img -holder starts here

            // Generating img div
            var img_div = document.createElement('div');
            img_div.className = "img-holder";

            var info_div = document.createElement('div');
            info_div.className = "info-holder";

            project_div.appendChild(img_div);
            project_div.appendChild(info_div);

            // Generating img
            var image = document.createElement('img');
            image.src = pic_project;
            // Appending img to img img-div
            img_div.appendChild(image);
            // img -holder done here

            // Info-holder starts here


            // Generating name
            var name = document.createElement('p');
            name.style.textAlign = "center";
            var name_span = document.createElement('span');
            name_span.className = "name";
            name_span.innerHTML= name_project;
            // Appending to info-holder
            name.appendChild(name_span);
            info_div.appendChild(name);

            // Generating ul
            var ul_super = document.createElement('ul');
            ul_super.style.listStyle = "none";
            var li_ver = document.createElement('li');
            var li_status = document.createElement('li');
            var li_lang = document.createElement('li');
            var li_avail = document.createElement('li');
            var li_plat = document.createElement('li');

            li_ver.innerHTML = "Version: "+version_project;
            ul_super.appendChild(li_ver);
            li_status.innerHTML = "Status: "+status_project;
            ul_super.appendChild(li_status);
            li_lang.innerHTML = "Language: "+language_project;
            ul_super.appendChild(li_lang);
            li_avail.innerHTML = "Available at: "+available_at_project;
            ul_super.appendChild(li_avail);
            li_plat.innerHTML = "Version: "+platform_project;
            li_plat.innerHTML = "Platform: ";
            var sec_ul = document.createElement('ul');
            for(var el in platform_project){
                var sec_li = document.createElement('li');
                sec_li.innerHTML = platform_project[el];
                sec_ul.appendChild(sec_li);
            }
            li_plat.appendChild(sec_ul);
            ul_super.append(li_plat);
            
            info_div.appendChild(ul_super);

            // info-holder done here

            // Generating and making description
            var des = document.createElement('p');
            des.className = "des";
            var des_span = document.createElement('span');
            des_span.className = "description";
            des_span.innerHTML = project_des;

            // Appending to info-holder
            des.appendChild(des_span);
            info_div.appendChild(des);

            project_div.append(info_div)
            container_main.appendChild(project_div);
            base.appendChild(container_main);
        }
    });