$(document).ready(function () {
    const listItem = [
        {
            "name": "Apple",
            "sub": ["App Stor", "iPhone", "iMac", "AirPot"],
            img: "/img/4-1.webp",
            listImg: ["/img/1.webp", "/img/1-2.webp", "/img/2-1.webp", "/img/2-2.webp"]
        },
        {
            "name": "Google",
            "sub": ["Play Stor", "Pixel", "Chrom", "Aindroi"],
            img: "/img/1-2.webp",
            listImg: ["/img/3-1.webp", "/img/3-2.webp", "/img/4-1.webp", "/img/4-2.webp",]
        },
        {
            "name": "Meta",
            "sub": ["Facebook", "Meseenger", "Instagram", "Telegram"],
            img: "/img/3-1.webp",
            listImg: ["/img/1.webp", "/img/2-1.webp", "/img/3-1.webp", "/img/4-1.webp",]
        },
        {
            "name": "Adoub",
            "sub": ["PhotoShop", "Allustrator", "Primeium", "Afterefect"],
            img: "/img/2-1.webp",
            listImg: ["/img/1-2.webp", "/img/2-2.webp", "/img/3-2.webp", "/img/4-2.webp",]
        }
    ]
    const listLeftmenu = [
        {
            "name": "Apple",
            "sub": ["apple1", "apple2", "apple3", "apple4"]
        },
        {
            "name": "Google",
            "sub": ["banana1", "banana1", "banana1", "banana1"]
        },
        {
            "name": "Meta",
            "sub": ["orang1", "orang1", "orang1", "orang1"]
        }
    ]

    //array filter 

    const listForm = [
        {
            "name" : "Phnum penh",
            "sub" : [
                {
                    "name" : "TK",
                    "sub" : ["TK1" , "TK2" , "TK3"]
                },
                {
                    "name" : "BKK",
                    "sub" : ["BK1" , "BK2" , "BK3"]
                },
                {
                    "name" : "CM",
                    "sub" : ["CM1" , "CM2" , "CM3"]
                }
            ]
        },
        {
            "name" : "Siem reab",
            "sub" : [
                {
                    "name" : "SV",
                    "sub" : ["SV1" , "SVV2" , "SV3"]
                },
                {
                    "name" : "TP",
                    "sub" : ["TP1" , "TP2" , "TP3"]
                },
                {
                    "name" : "PS",
                    "sub" : ["PS1" , "PS2" , "PS3"]
                }
            ]
        },
        {
            "name" : "battambong",
            "sub" : [
                {
                    "name" : "MS",
                    "sub" : ["MS1" , "MS2" , "MS3"]
                },
                {
                    "name" : "DD",
                    "sub" : ["DD1" , "DD2" , "DD3"]
                },
                {
                    "name" : "SK",
                    "sub" : ["SK1" , "SK2" , "SK3"]
                }
            ]
        }
    ]

    const body = $('body');
    const popup = `
        <div class="popup"></div>
    `;

    function getMenu() {
        var text = "";
        var text1 = "";
        listItem.forEach((el) => {
            var sub = el.sub;
            text += `
                <li>
                    <a href="">${el.name}</a>
                    <ul class="sub-menu">
                        ${getSubData(sub)}
                    </ul>
                </li>
            `;

            text1 += ` 
                <li>
                    <a href="">${el.name}</a>
                </li>
            `;
        })
        $(".menu").find("ul").append(text);
        $(".drawBar").find("ul").html(text1);
    }

    const getSubData = (subData) => {   // fuction for subData
        let txt = "";
        subData.forEach((el) => {
            txt += `
                <li>
                    <a href="">${el}</a>
                    
                </li>
            `;
        })
        return txt;
    }
    getMenu();

    $(".btnClick").click(function () {
        $(".drawBar").css({ "left": "0" })
        body.append(popup);
    })

    body.on("click", ".popup", function () {
        $(".drawBar").css({ "left": "-40%" })
        $(this).remove();
    })


    getLeftmenu();
    function getLeftmenu() {
        let txt = "";

        listLeftmenu.forEach((el) => {
            txt += `
                <li>
                    <a href="">${el.name}
                        <span class="icon">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </a>
                    <ul class="sub-menu" style="display: none;">
                        ${getSubData(el.sub)}
                    </ul>
                </li>
            `;
        });

        $(".left-menu").find("ul").html(txt);
        //Option 1
        $(".left-menu > ul > li > a").click(function (event) {
            event.preventDefault();
            const subMenu = $(this).next();
            subMenu.slideToggle(); // Toggle display
            $(this).find(".icon").find("i").toggleClass("fa-plus fa-minus"); // Toggle icon
        });
        //Option 2

        // $('left-menu').on("click", "ul li .m2", function(){
        //     var ethis = $(this);
        //     ethis.parent().find(".sub-menu").slideToggle();
        //     if(ethis.find('.fa-plus').length > 0 ){
        //     ethis.find('i').removeClass('fa-plus');
        //     ethis.find('i').addClass('fa-minus');
        //     }else{
        //     ethis.find('i').addClass('fa-plus');
        //     ethis.find('i').removeClass('fa-minus');
        // }
        // })
    }
    getSlide();
    //hide&show slide
    const slide = $('.slide');
    slide.hide();
    slide.eq(0).show();
    //pagination 
    $('.slide-box').on("click", "ul li", function () {
        slide.eq(slidId).hide();
        slidId = $(this).index();
        slide.eq(slidId).show();
        $(this).parent().find('li').removeClass('active');
        $(this).addClass("active");
    });

    // next slide
    var slidId = 0;
    var numSlide = slide.length;
    $('.btnNext').click(function () {
        nextSlide();
    });

    function nextSlide() {
        slide.eq(slidId).hide();
        $('.slide-box > ul > li').eq(slidId).removeClass("active");
        slidId++;
        if (slidId >= numSlide) {
            slidId = 0;
        }
        slide.eq(slidId).show();
        $('.slide-box > ul > li').eq(slidId).addClass("active");
    };

    //back slide
    $('.btnBack').click(function () {
        slide.eq(slidId).hide();
        $('.slide-box > ul > li').eq(slidId).removeClass("active");
        slidId--;
        if (slidId < 0) {
            slidId = numSlide - 1;
        }
        slide.eq(slidId).show();
        $('.slide-box > ul > li').eq(slidId).addClass("active");
    });

    //get slide
    function getSlide() {
        let txt = "";
        let txt2 = "";
        listItem.forEach((el, i) => {
            txt += `
                <div class="slide">
                    <img src="${el.img}" alt="">
                    <span> ${i + 1} / ${listItem.length} </span>
                </div>
            `;
            txt2 += `
                <li>
                    ${i + 1}
                </li>
            `;
        });

        $('.slide-box').append(txt);
        $('.slide-box > ul').html(txt2);
        $('.slide-box > ul > li').eq(0).addClass("active");
    }

    // auto slide run 
    var autoSlide = setInterval(nextSlide, 1000);

    // slide stop 

    $('.slide-box').mouseover(function () {
        clearInterval(autoSlide);
    })

    $('.slide-box').mouseleave(function () {
        autoSlide = setInterval(nextSlide, 1000);
    })

    // image box
    getImgList();
    function getImgList() {
        let txt = "";
        listItem.forEach((el) => {
            let txt2 = "";
            var listImg = el.listImg;
            listImg.forEach((el2) => {
                txt2 += `
                    
                    <img src="${el2}" alt="">  
                    
                `;
            });
            txt += `
                <div class="col-xxl-3 col-xl-3 col-lg-3 img-box">
                    <div class="box">
                         ${txt2}
                    </div>
                </div>
            `;
        })
        $("#box-img").append(txt);
    }

    // get frind menu
    getFrind();
    function getFrind() {
        let txt = "";
        listItem.forEach((el) => {
            txt += `
                <li>
                    <img src="${el.img}" alt="">
                    <span>${el.name}</span>
                </li>
            `;
        })
        $('.friend-box').find('ul').html(txt)
    }
    $('.friend-box').on("click", "h1", function () {
        if ($(this).parent().height() == 39) {
            $(this).parent().css({ "height": "450px" });
        } else {
            $(this).parent().css({ "height": "39px" });
        }

    })

    //click open chat
    $('.friend-box > ul > li').click(function () {
        var name = $(this).find('span').text();
        var img = $(this).find('img').attr("src");
        var chatContainer = $('.chat-container')
        var numberChat = 0;

        // Check if a chat box already exists for this friend
        if (chatContainer.find(".chat-box span:contains('" + name + "')").length > 0) {
            return; // Exit the function if chat box already exists
        }

        var chatBox = `
            <div class="chat-box">
                <div class="header">
                    <img src="${img}" alt="">
                    <span>${name}</span>
                    <i class="fa-solid fa-xmark btnClose"></i>
                </div>
            </div>
        `;
        if (chatContainer.find(".chat-box").length == 3) {
            chatContainer.find(".chat-box").eq(0).remove();
        }
        $(".chat-container").append(chatBox);

    })
    // close chat box
    $('.chat-container').on("click", '.chat-box .btnClose', function () {
        console.log("clicl")
        $(this).parents('.chat-box').remove();
    });

    //filter box

    const getFilter = ()=>{
        let txt = "";
        listForm.forEach( (el,i)=> {
            txt += `
                <option value="${i}">${el.name}</option>
            `;
        });
        $("#txt-city").append(txt);
    }
    getFilter();

    var cityID;

    $("#txt-city").change( function(){
        cityID = $(this).val();
        var sub = listForm[cityID]['sub']
        let txt = "";
        sub.forEach( (el,i)=>{
            txt +=`
                <option value="${i}">${el.name}</option>
            `;
        })
        $("#txt-distric").click().html(txt)
    })

    $("#txt-distric").change( function(){
        disticId = $(this).val();
        var sub = listForm[cityID]['sub'][disticId]['sub']
        let txt = "";
        sub.forEach( (el,i) =>{
            txt += `
            <option value="${i}">${el}</option>
            `;
        })

        $("#txt-comune").html(txt);
    })

});