/*
0.XianXia.jfif
1.history.jfif
2.fantasy.jfif
3.game.jfif
4.science.jfif
5.city.jfif

book_cover_idList[1] = first book cover
book_cover_idList[2] = second book cover 
... and so on.
*/

book_cover_file = ["XianXia.jfif", "history.jfif", "fantasy.jfif", "game.jfif", "science.jfif", "city.jfif"];
book_cover_url = new Array(6);
book_cover_idList = new Array(6);
book_cover_locatoin = new Array(6);
top_book_button_idList = new Array(6);

center = 0;
pause = false;

//every 3000ms (3s) will call the function
autoPlay = setInterval("turnRight()",3000);


function showAllImg() {
    for (i = 0; i < book_cover_file.length; i++) {
        book_cover_locatoin[i] = i;
        book_cover_url[i] = "url('img/book-cover/" + book_cover_file[i] + "') no-repeat";
        book_cover_idList[i] = top_book_cover.children[i].children[0];
        book_cover_idList[i].style.background = book_cover_url[i];
        book_cover_idList[i].style.opacity = "1";
        top_book_button_idList[i] = top_book_button.children[i].children[0];
    }
    topBookCover();
}

function playPause(){
    if(pause){
       play_pause.style.background = "url('./img/play_pause_icon.png') 0px 0px no-repeat";
        autoPlay = setInterval("turnRight()",3000);
        pause = false;
    }else{
      play_pause.style.background = "url('./img/play_pause_icon.png') -22px 0px no-repeat"; 
        autoPlay = clearInterval(autoPlay); // clear Interval
        pause = true;
    }
}

//center
function cover0(cid) {
    cid.style.height = "240px";
    cid.style.width = "180px";
    cid.style.top = "20px";
    cid.style.zIndex = "3";
    cid.style.marginRight = "-80px";
    cid.style.backgroundSize = "180px 240px";
    center = book_cover_locatoin[0];
}

//right
function cover1(cid) {
    cid.style.height = "192px";
    cid.style.width = "144px";
    cid.style.top = "40px";
    cid.style.zIndex = "2";
    cid.style.marginRight = "-150px";
    cid.style.backgroundSize = "144px 192px";
}

function cover2(cid) {
    cid.style.height = "153px";
    cid.style.width = "115px";
    cid.style.top = "60px";
    cid.style.zIndex = "1";
    cid.style.marginRight = "-190px";
    cid.style.backgroundSize = "115px 153px";
}

function cover3(cid) {
    cid.style.height = "122px";
    cid.style.width = "92px";
    cid.style.top = "80px";
    cid.style.zIndex = "0";
    cid.style.marginRight = "-210px";
    cid.style.backgroundSize = "92px 122px";
}

//left
function cover4(cid) {
    cid.style.height = "153px";
    cid.style.width = "115px";
    cid.style.top = "60px";
    cid.style.zIndex = "1";
    cid.style.marginRight = "60px";
    cid.style.backgroundSize = "115px 153px";
}

function cover5(cid) {
    cid.style.height = "192px";
    cid.style.width = "144px";
    cid.style.top = "40px";
    cid.style.zIndex = "2";
    cid.style.marginRight = "0px";
    cid.style.backgroundSize = "144px 192px";
}

function turnRight() {
    for (i = 0; i < book_cover_locatoin.length; i++) {
        if (book_cover_locatoin[i] < 5) {
            book_cover_locatoin[i]++;
        } else {
            book_cover_locatoin[i] = 0;
        }
    }
    topBookCover();
}

function turnLeft() {
    for (i = 0; i < book_cover_locatoin.length; i++) {
        if (book_cover_locatoin[i] > 0) {
            book_cover_locatoin[i]--;
        } else {
            book_cover_locatoin[i] = 5;
        }
    }
    topBookCover();
}

function topBookCover() {
    cover0(book_cover_idList[book_cover_locatoin[0]]);
    cover1(book_cover_idList[book_cover_locatoin[1]]);
    cover2(book_cover_idList[book_cover_locatoin[2]]);
    cover3(book_cover_idList[book_cover_locatoin[3]]);
    cover4(book_cover_idList[book_cover_locatoin[4]]);
    cover5(book_cover_idList[book_cover_locatoin[5]]);
    currentBookCover();
    setTimeout(hideHot, 0);
    setTimeout(showHot, 800);
}

function currentBookCover() {
    for (i = 0; i < top_book_button_idList.length; i++) {
        if (i == center) {
            top_book_button_idList[i].style.boxShadow = "0 0 15px 5px #4e9ae6";
        } else {
            top_book_button_idList[i].style.boxShadow = "";
        }
    }
}

function chooseCenter(inCenter){
    center = inCenter;
    var idx = 0;
    while(book_cover_locatoin[idx] != center){
        idx++;
    }
    for(i=0; i<idx;i++){
        book_cover_locatoin.push(book_cover_locatoin.shift()); // addToTail = push(), removeFromHead() = shift()
    }
    topBookCover();
    currentBookCover();
}

function hideHot(){
    hot.style.opacity = "0";
}

function showHot(){
    hot.style.opacity = "1";
}