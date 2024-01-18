let tablinks= document.getElementsByClassName("tab-links")
let tabcontents= document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab")
    }
    document.getElementById(tabname).classList.add("activeTab")
}

console.log("tabcontents",tabcontents)
console.log("tabcontent",tabcontent)