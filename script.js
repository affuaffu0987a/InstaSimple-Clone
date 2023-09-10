const details = [
    {
        dp: "https://e0.pxfuel.com/wallpapers/664/291/desktop-wallpaper-hania-amir.jpg",
        stori: "https://timesofindia.indiatimes.com/photo/96518055/96518055.jpg?v=3"
    },
    {
        dp: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?cs=srgb&dl=pexels-harsh-kushwaha-1689731.jpg&fm=jpg",
        stori: " https://images.unsplash.com/photo-1683783208576-f675afb75628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&w=1000&q=80"
    },
    {
        dp: "https://img.freepik.com/premium-photo/face-fashion-black-woman-red-hat-suit-stylish-clothing-portrait-beauty-aesthetic-female-model-from-south-africa-posing-with-makeup-cosmetics-edgy-classy-designer-outfit_590464-117791.jpg?w=360",
        stori: " https://img.freepik.com/free-photo/attentive-fashionable-woman-with-bun-hairstyle-looks-seriously-camera-dressed-stylish-pink-jacket-poses-against-city-background-has-bright-vivid-makeup-people-style-fashion-concept_273609-57798.jpg"
    },
    {
        dp: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&w=1000&q=80",
        stori: " https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        dp: "https://img.freepik.com/free-photo/adorable-girl-sitting-white-box-looking-camera-high-quality-photo_144627-75484.jpg",
        stori: " https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?cs=srgb&dl=pexels-steven-arenas-620074.jpg&fm=jpg"
    },
    {
        dp: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201610/thumb_100416040349_0.jpg?VersionId=mpr10ku8D.2oVn7tCswh3QSI8S2KD1AU&size=686:*",
        stori: " https://img.freepik.com/premium-photo/beautiful-woman-portrait-gold-black-colors_85369-32.jpg"
    },
    {
        dp: "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg",
        stori: "https://images2.fanpop.com/image/photos/11400000/Jon-Kortajarena-male-models-11455916-400-529.jpg"
    },
    {
        dp: "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-bright-pink-blue-summer-stylish-clothes-isolated-white-background_158538-2899.jpg?w=360",
        stori: "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-bright-pink-blue-summer-stylish-clothes_158538-2939.jpg"
    },
]

const Storiess = document.querySelector(".stories")
const fullImgStory = document.querySelector(".fullimg-story")
const idImg = document.querySelectorAll(".id_image")
const heart = document.querySelectorAll("#heartwo")
const scree_image = document.querySelectorAll("#screen-img")
const image_icons1 = document.querySelector("#hear1")
const image_icons2 = document.querySelector("#hear2")
const image_icons3 = document.querySelector("#hear3")


// console.log(idImg[0]);
// const storyy=document.querySelector(".story")

let allDp = ""
details.forEach((ele, index) => {
    allDp += `<div class="story">
              <img id="${index}" src="${ele.dp}" alt="">
             </div>`
    // console.log(allDp);
})

Storiess.innerHTML = allDp;

Storiess.addEventListener("click", (e) => {
    let fullimg = details[e.target.id].stori;
    idImg.forEach((elem) => {
        elem.style.display = "none"
    })
    fullImgStory.style.display = "block"
    fullImgStory.style.backgroundImage = `url(${fullimg})`
    setTimeout(() => {
        fullImgStory.style.display = "none"
        idImg.forEach((elem) => {
            elem.style.display = "block"
        })
    }, 2000)
})
let Click = 0;
heart.forEach((element) => {
    element.addEventListener("click", () => {
        if (Click == 0) {
            element.style.color = "red"
            Click = 1
        } 
        else {
            element.style.color = "white";
            Click = 0;
        }
    })
})


scree_image.forEach((elems, index) => {
    elems.addEventListener("dblclick", () => {
        console.log("hello");
        if (index == 0) {
            image_icons1.style.opacity = ".5"
        }
        else if (index == 1) {
            image_icons2.style.opacity = ".5"
        }
        else if (index == 2) {
            image_icons3.style.opacity = ".5"
        }
        setTimeout(() => {
            image_icons1.style.opacity = "0"
            image_icons2.style.opacity = "0"
            image_icons3.style.opacity = "0"
        }, 2000)
    })
})