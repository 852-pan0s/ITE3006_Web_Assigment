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
book_cover_idList= new Array(6);
book_cover_locatoin = new Array(6);


//center = 0;
//left = 5;
//previous_left = 4;
//right = 1;
//next_right = 2;


function showAllImg(){
    for (i = 0; i < book_cover_file.length; i++) {
        book_cover_locatoin[i] = i;
        book_cover_url[i] = "url('../img/book-cover/" + book_cover_file[i] + "') no-repeat";
        book_cover_idList[i] = top_cover.children[i];
        book_cover_idList[i].style.background = book_cover_url[i];
        book_cover_idList[i].style.opacity = "1";
    }
    top_book_cover();
}

//center
function cover0(cid){    
    cid.style.height= "240px";
    cid.style.width= "180px";
    cid.style.top= "20px";
    cid.style.zIndex = "3";
    cid.style.marginRight = "-80px";
    cid.style.backgroundSize = "180px 240px";
}

//right
function cover1(cid){
    cid.style.height= "192px";
    cid.style.width= "144px";
    cid.style.top= "40px";
    cid.style.zIndex = "2";
    cid.style.marginRight = "-150px";
    cid.style.backgroundSize = "144px 192px";
}

function cover2(cid){
    cid.style.height= "153px";
    cid.style.width= "115px";
    cid.style.top= "60px";
    cid.style.zIndex = "1";
    cid.style.marginRight = "-190px";
    cid.style.backgroundSize = "115px 153px";
}

function cover3(cid){
    cid.style.height= "122px";
    cid.style.width= "92px";
    cid.style.top= "80px";
    cid.style.zIndex = "0";
    cid.style.marginRight = "-210px";
    cid.style.backgroundSize = "92px 122px";
}

//left
function cover4(cid){
    cid.style.height= "153px";
    cid.style.width= "115px";
    cid.style.top= "60px";
    cid.style.zIndex = "1";
    cid.style.marginRight = "60px";
    cid.style.backgroundSize = "115px 153px";
}

function cover5(cid){
    cid.style.height= "192px";
    cid.style.width= "144px";
    cid.style.top= "40px";
    cid.style.zIndex = "2";
    cid.style.marginRight = "0px";
    cid.style.backgroundSize = "144px 192px";
}



//function showAllImg() {
//    for (i = 0; i < book_cover.length; i++) {
//        book_cover_url[i] = "url('../img/book-cover/" + book_cover[i] + "') no-repeat";
//    }
//    top_book_cover();
//
//}
//
function turnRight() {
    for(i=0;i<book_cover_locatoin.length;i++){
        if(book_cover_locatoin[i]<5){
            book_cover_locatoin[i]++;
        }else{
            book_cover_locatoin[i]=0;
        }
    }
    top_book_cover();
}

function turnLeft() {
    for(i=0;i<book_cover_locatoin.length;i++){
        if(book_cover_locatoin[i]>0){
            book_cover_locatoin[i]--;
        }else{
            book_cover_locatoin[i]=5;
        }
    }
    top_book_cover();
}

function previousLeft(){
//    if (previous_left > 0) {
//        previous_left--;
//    } else {
//        previous_left = 5;
//    }
}

function nextRight(){
//    if (right < 5) {
//        next_right++;
//    } else {
//        next_right = 0;
//    }
}

function top_book_cover() {
    cover0(book_cover_idList[book_cover_locatoin[0]]);
    cover1(book_cover_idList[book_cover_locatoin[1]]);
    cover2(book_cover_idList[book_cover_locatoin[2]]);
    cover3(book_cover_idList[book_cover_locatoin[3]]);
    cover4(book_cover_idList[book_cover_locatoin[4]]);
    cover5(book_cover_idList[book_cover_locatoin[5]]);
}
