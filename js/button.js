menu_open = false;
signIn_open = false;
ac_opt_open = false;
shadow_open = false;
show_pw = false;
searchBar_open = false;
signUp_open = false;
shadow = document.getElementById('pg-shadow'); //find element by id
menu = document.getElementById('menu');
signIn = document.getElementById('signIn');
ac_opt = document.getElementById('ac_opt');
pg_body = document.getElementById('pg-body');
menu_clicked = document.getElementById('menu-button');
ac = document.getElementById('ac');
pwd = document.getElementById('pwd');
show_pw_icon = document.getElementById('pw_icon');
Invalid_ac = document.getElementById('invalid');
empty_ac = document.getElementById('empty_ac');
empty_pwd = document.getElementById('empty_pwd');
search_bar = document.getElementById('search_bar');
search_btn = document.getElementById('search_btn');
search_submit = document.getElementById('search_submit');
cancel_icon = document.getElementById('search_submit');
signUp = document.getElementById('signUp');
signUp_header = document.getElementById('signUp_header');

function showShadow() {
    shadow.style.visibility = "visible";
    shadow.style.opacity = "0.5";
    shadow_open = true;
}

function hideShadow() {
    shadow.style.opacity = "0";
    setTimeout(hideShadowDelay, 500);

    hideMenu();
    hideSignIn();
    hideAcOpt();
    hideText();
    hideSignUp();

}
function hideShadowDelay() {
    shadow.style.visibility = "hidden";
}


function showMenu() {
    showShadow();
    showAction();
    //    menu.classList.remove('hide');
    menu_clicked.classList.remove('hide');
    menu_open = true;
}


/*show login window*/
function showSignIn() {
    showShadow();
    /*change the css*/
    signIn.style.top = "50%";
    signIn.style.opacity = "1";
    signIn.style.width = "400px";
    signIn.style.height = "400px";
    //signIn.classList.remove('hide');
    signIn_open = true;
}

/*show login window*/
function showSignUp() {
    showShadow();
    /*change the css*/
    signUp.style.top = "50%";
    signUp.style.opacity = "1";
    signUp.style.width = "400px";
    signUp.style.height = "400px";
    //signIn.classList.remove('hide');
    signUp_open = true;
    signUp_header.classList.remove('hide');
}

function showAcOpt() {
    ac_opt.style.height = '100px';
    ac_opt_open = true;
}



function hideMenu() {
    if (menu_open) {
        //        menu.classList.add('hide');
        menu.style.width = '0px';
        menu_clicked.classList.add('hide');
        menu_open = false;
    }
}

function hideSignIn() {
    if (signIn_open) {
        // hide the window after the transition time finishes
        setTimeout(hideSignInForm, 500);
        signIn.style.top = "80%";
        signIn.style.opacity = "0";

        // signIn.classList.add('hide');
        signIn_open = false;
    }
}

function hideSignUp(){
    if (signUp_open) {
        // hide the window after the transition time finishes
        setTimeout(hideSignUpForm, 500);
        signUp.style.top = "80%";
        signUp.style.opacity = "0";
        // signIn.classList.add('hide');
        signUp_open = false;
    }
}


function hideSignInForm() {
    signIn.style.width = "0";
    signIn.style.height = "0";
}

function hideSignUpForm() {
    signUp.style.width = "0";
    signUp.style.height = "0";
    signUp_header.classList.add('hide');
}

function hideAcOpt() {
    if (ac_opt_open) {
        ac_opt.style.height = '0px';
        ac_opt_open = false;
    }
}

function showAction() {
    menu.style.width = '20%';
    if (window.innerWidth < 1036) {
        menu.style.width = '100%';
    }
}

/*when window size is less than 1036, it will do something*/
function sizeDetect() {
    if (window.innerWidth < 1036) { // if current window width is less than 1036
        // set the body to full screen
        if (menu_open) {
            menu.style.width = '100%';
        }

    } else {
        // set the body to default size
        if (menu_open) {
            menu.style.width = '20%';
        }
    }
}

function checkAccount() {
    if (ac.value == "") {
        empty_ac.classList.remove('hide');
    } else {
        empty_ac.classList.add('hide');
    }
    if (pwd.value == "") {
        empty_pwd.classList.remove('hide');
    } else {
        empty_pwd.classList.add('hide');
    }
    if (ac.value != "" && pwd.value != "") {
        Invalid_ac.classList.remove('hide');
    } else {
        Invalid_ac.classList.add('hide');
    }
    return false;
}

function hideText() {
    Invalid_ac.classList.add('hide');
    empty_ac.classList.add('hide');
    empty_pwd.classList.add('hide');
    show_pw = true;
    showPW();
    reg_show_pw = true;
    reg_showPW();

}

function showPW() {
    if (show_pw) {
        pwd.type = "password";
        show_pw_icon.style.background = "url('img/show_pw_icon.png') -0 -31px";
        show_pw = false;
    } else {
        pwd.type = "text";
        show_pw_icon.style.background = "url('img/show_pw_icon.png') 0px -6px";
        show_pw = true;
    }
}

//clean username input
function cleanUser() {
    ac.value = "";
    pwd.value = "";
    document.getElementById('autoLogin').checked=false;
}


function showSearchBar() {
    if (!searchBar_open) {
        search_btn.style.width = "300px";
        search_btn.style.borderRadius = "12px 32px 32px 12px";
        search_bar.style.opacity = "1";
        search_bar.style.width = "80%";
        search_submit.classList.remove('hide');
        document.getElementById('search_input').style.visibility = "visible";
        document.getElementById('cancel_icon').style.width = "";
        document.getElementById('search_icon').style.zIndex = "0";
        searchBar_open = true;
    }
}

function hideSearchBar() {
    if (searchBar_open) {
        search_btn.style.width = "";
        search_btn.style.borderRadius = "12px";
        search_bar.style.opacity = "0";
        search_bar.style.width = "0";
        search_submit.classList.add('hide');
        document.getElementById('search_input').style.visibility = "hidden";
        document.getElementById('cancel_icon').style.width = "0";
        searchBar_open = false;
    }
}

function searchCheck() {
    if (search_input.value.length < 1) {
        return false;
    } else {
        return true;
    }
}

function goToTop(id){
    document.getElementById(id).scrollTop = "0";
}

function changeIfraem(url){
   var ifraem = document.getElementById('main');
   ifraem.src=url;
}