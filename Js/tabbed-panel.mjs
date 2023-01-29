let tabs=document.querySelector(".container__main-tabs");

// when tab is clicked
tabs.addEventListener("click",(eve)=>
{
    eve.preventDefault();
    eve.stopPropagation();

    let tab=eve.target;//get <a>
    let panels=document.querySelectorAll(".container__panel");//get all panels

    // if href matches panel1
    if(tab.href.includes(panels[0].id)){//first tab was clicked
        panel=panels[0];

        //isn't active one
        if(!(panel.classList.contains("active"))){
            panel.classList.add("active");//make it active
            panels[1].classList.remove("active");//make the other one inactive

            // make the tab(span) active one and disable the other tab
            tab.closest("span.container__main-tabs__tab").classList.add("active");
            document.querySelectorAll(".container__main-tabs__tab")[1].classList.remove("active");
        }

        //if this panel is the active one do nothing.
    }

    // second tab was clicked
    else{
        panel=panels[1];
        //isn't active one
        if(!(panel.classList.contains("active"))){
            panel.classList.add("active");//make it active
            panels[0].classList.remove("active");//make the other one inactive

            // make the tab(span) active one and disable the other tab
            tab.closest("span.container__main-tabs__tab").classList.add("active");
            document.querySelectorAll(".container__main-tabs__tab")[0].classList.remove("active");
        }

        //if this panel is the active one do nothing.
    }
},
{passive:true,once:false,}); 