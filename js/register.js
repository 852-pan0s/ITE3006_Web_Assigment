reg_show_pw = false;
selectAll = false;
checkboxTrueCount = 0;
new_ac = document.getElementById('new_ac');
new_pwd = document.getElementById('new_pwd');
reg_eye_icon = document.getElementById('reg_eye_icon');
email = document.getElementById('email');

function reg_checkAccount() {
    if (new_ac.value == "") {
        new_empty_ac.classList.remove('hide');
        signUp.scrollTop = "37"
        title_user.classList.add('red');
        return false;
    } else {
        new_empty_ac.classList.add('hide');
        title_user.classList.remove('red');
    }
    if (new_pwd.value == "") {
        new_empty_pwd.classList.remove('hide');
        signUp.scrollTop = "120"
        title_pwd.classList.add('red');
        return false;
    } else {
        new_empty_pwd.classList.add('hide');
        title_pwd.classList.remove('red');
    }
    
    if (!female.checked  && !male.checked) {
        signUp.scrollTop = "203"
        title_gender.classList.add('red');
        new_empty_gender.classList.remove('hide');
        return false;
    } else {
        title_gender.classList.remove('red');
        new_empty_gender.classList.add('hide');

    }
    
    if (email.value.length < 1) {
        signUp.scrollTop = "363"
        title_email.classList.add('red');
        new_empty_email.classList.remove('hide');
        return false;
    } else {
        title_email.classList.remove('red');
        new_empty_email.classList.add('hide');
    }

    if (checkboxTrueCount < 1) {
        signUp.scrollTop = "439"
        title_fav.classList.add('red');
        return false;
    } else {
        title_fav.classList.remove('red');
    }

    alert('An activative emali has sent to your email, please activate your account.');
    return true;
}

function reg_showPW() {
    if (reg_show_pw) {
        new_pwd.type = "password";
        reg_eye_icon.style.background = "url('img/show_pw_icon.png') -0 -31px";
        reg_show_pw = false;
    } else {
        new_pwd.type = "text";
        reg_eye_icon.style.background = "url('img/show_pw_icon.png') 0px -6px";
        reg_show_pw = true;
    }
}

function chooseAll() {
    var tr_list = document.getElementById('favCategory').children;
    for (i = 0; i < tr_list.length; i++) {
        if (!selectAll) {
            var curent_checkbox = tr_list[i].children[0].children[0];
            curent_checkbox.checked = true;
            checkboxTrueCount = 6;

        } else {
            var curent_checkbox = tr_list[i].children[0].children[0];
            curent_checkbox.checked = false;
            checkboxTrueCount = 0;
        }
    }
    if (!selectAll) {
        selectAll = true;
    } else {
        selectAll = false;
    }
}

function checkboxCount(cid) {
    var checkbox = document.getElementById(cid).checked;
    if (checkbox) {
        checkboxTrueCount++;
    } else {
        checkboxTrueCount--;
    }
    var all = document.getElementById('all');
    if (checkboxTrueCount >= 6) {
        all.checked = true;
        selectAll = true;
    } else {
        all.checked = false;
        selectAll = false;
    }
}

function chooseGender(gender) {
    if (gender == "n") {
        m_icon.style.boxShadow = "";
        f_icon.style.boxShadow = "";
        return;
    }
    if (gender == "F") {
        female.checked = true;
    } else {
        male.checked = true;
    }
    if (female.checked) {
        f_icon.style.boxShadow = "0px 0px 5px 3px #197cbc";
        m_icon.style.boxShadow = "";
    } else {
        m_icon.style.boxShadow = "0px 0px 5px 3px #197cbc";
        f_icon.style.boxShadow = "";
    }
}

// change the reset button type to "reset"
function sure(){
    var sure = confirm("Are you sure reset all the data?");
    if(sure){
        goToTop('signUp');
        document.getElementById('reset').type = "reset";
    }else{
        document.getElementById('reset').type = "button";
    }
}
