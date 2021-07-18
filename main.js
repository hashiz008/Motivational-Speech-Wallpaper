function motivationalSpeechWallpaper(text,colorCode,url,vertical,horizon) {

    let verti = {"top":"align-items-start","center":"align-items-center","bottom":"align-items-end"};
    let hori = {"left":"justify-content-start","center":"justify-content-center","right":"justify-content-end"};

    let parentDiv = document.createElement("div");
    let h3 = document.createElement("h3");

    parentDiv.classList.add("d-flex","ml-2",verti[vertical],hori[horizon]);
    parentDiv.style.backgroundImage = "url("+url+")";
    parentDiv.style.backgroundSize = "1450px"
    parentDiv.style.height = "850px"

    h3.classList.add("d-flex", "col-7")
    h3.innerHTML = text;
    h3.style.color = `#${colorCode}`;

    parentDiv.append(h3)
    return parentDiv;
}

let domObj = document.getElementById("target");

let slider1 = motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png",
"center", "center", domObj);
let slider2 = motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
"bottom", "left", domObj);
let slider3 = motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
"top", "right", domObj);

domObj.append(slider1)
domObj.append(slider2)
domObj.append(slider3)