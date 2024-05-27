let myform = document.getElementById("myForm");
let fname = document.getElementById("fname");
let mname = document.getElementById("mname");
let lname = document.getElementById("lname");

let date = document.getElementById("date");

let phone = document.getElementById("phoneNo");

let male = document.getElementById("radio1");
let female = document.getElementById("radio2");
let other = document.getElementById("radio3");

let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");

let country = document.getElementById("counrty");
let state = document.getElementById("state");
let city = document.getElementById("city");
let pincode = document.getElementById("pinCode");

let user = document.getElementById("userName");
let mail = document.getElementById("mail");

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let checkAll = document.getElementById('checkAll');

let skillInput = document.getElementById("skillInput");

let Reset = document.getElementById("reset");
let submit = document.getElementById("submit");

//date validation
var now = new Date();
minDate = now.toISOString().substring(0, 10);
$('#date').prop('max', minDate);

//to uppercase.........
function changeText() {
    fname.value = fname.value.toUpperCase();
    mname.value = mname.value.toUpperCase();
    lname.value = lname.value.toUpperCase();
    add1.value = add1.value.toUpperCase();
    add2.value = add2.value.toUpperCase();
    skillInput.value = skillInput.value.toUpperCase()
}
//checkbox selector...........
function checkSelect(isCheckAll) {
    const data = document.getElementsByName('hobby');
    if (isCheckAll && checkAll.checked) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element.checked = true;
        }
        return;
    } else if (isCheckAll && !checkAll.checked) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element.checked = false;
        }
        return;
    }
    checkAll.checked = true;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (!element.checked) {
            checkAll.checked = false;
        }
    }

}
//Adddress sectiion
var Address = {
    "India": {
        "Gujarat": ["Surat", "Ahemdabad", "Rajkot", "Amereli"],
        "Rajsthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
        "Maharashtra": ["Achalpur", " Mumbai", "Nagpur", "Solapur"],
        "Manipur": ["Imphal", "Kakching", "Ukhrul", "Andro"]
    },
    "America": {
        "California": ["Los Angeles", "San Diego", "San Jose", "San Francisco"],
        "Colorado": ["	Denver", "Colorado Springs", "Aurora", "Fort Collins"],
        "Florida": ["	Miami", "	Tampa", "	Orlando", "	Hialeah"],
        "Tennessee": ["Franklin", "Johnson City", "Bartlett", "	Kingsport"]
    },
    "Singapore": {
        "Central Region": ["Choa Chu Kang", "Marine Parade", "Bishan", "Yishun"],
        "East Region": ["Bedok", "Changi", "Changi Bay", "Pasir Ris"],
        "North Region": ["Hougang", "Sembawang", "Jurong", "Bukit Batok"],
        "North-East Region": ["Bedok", "Bayshore", "Seletar", "Ang Mo Kio"],
    },
    "Dubai": {
        "Abu Dhabi": ["Dibba", "Jebel Ali", "Kalba"],
        "Sharjah": ["Fujairah", "Al Ain"],
        "Fujairah": ["Hatta", "Kalba", "Ajman"]
    }
}
function address() {
    for (x in Address) {
        country.options[country.options.length] = new Option(x, x);
    }
    sateLoad();
}
function sateLoad() {
    country.onchange = function () {
        city.length = 1;
        state.length = 1;
        for (const y in Address[this.value]) {
            state.options[state.options.length] = new Option(y, y);

        }
    }
    CityLoad();
}
function CityLoad() {
    state.onchange = function () {
        city.length = 1;
        let z = Address[country.value][this.value];
        for (let i = 0; i < z.length; i++) {
            city.options[city.options.length] = new Option(z[i], z[i]);
        }
    }
}
window.onload = function () {
    address();
    skill(skillInput);
}


//To watch windows.onload function uppwer^^^^^^

//skill add 
let ids = 1;
let skillArr = [];
let obj = { skill: "", id: "" };
function skill(element) {
    element.addEventListener("keydown", myFunction);
}
function myFunction(event) {
    if (event.key === "Enter" && this.value) {
        skillArr.forEach((Val) => {
            if (Val.skill == skillInput.value) {
                console.log(skillInput.value);
                skillInput.value = "";
                return false;
            }
        })
    }
    if (event.key === "Enter" && this.value) {

        let obj = { skill: `${this.value}`, id: `${ids}` };
        skillArr.push(obj);
        skillMaker();
        ids++;
        this.value = "";
    }
}
function skillMaker() {
    let items = document.getElementById("items");
    items.innerHTML = skillArr.map((e, index) => {
        return `<div class="col-3 skillDiv" id="${e.id}">
        <span class="spanSkill form-label" value="${e.skill}">${e.skill}</span>
        <button type="button" onclick="removBtn('${index}')" class="btn btn-close btn-close-dark  spanBtn"></button>
        </div>`
    }).join(" ");
}
function removBtn(element1) {
    skillArr.splice(element1, 1);
    skillMaker();
}

//only number in Pin-code....
var inputField = document.querySelector('#pinCode');
inputField.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};
phone.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};

let hobbyArr = [];
let skillArr2 = [];
let recordArr = [];
let genderVal;
let mykey;

function validateForm(event) {
    event.preventDefault();
    //fname
    if (!fname.value) {
        $("#validFname").show();
        fname.focus();
        return true;
    } else {
        if (fname.value.length < 3) {
            $("#validFname").hide();
            $("#validFnameChar").show();
            fname.focus();
            return true;
        } else {
            $("#validFnameChar").hide();
            $("#validFname").hide();
        }
    }
    // mname
    if (!mname.value) {
        $("#validMname").show();
        mname.focus();
        return true;
    }
    else {
        if (mname.value.length < 3) {
            $("#validMname").hide();
            $("#validMnameChar").show();
            mname.focus();
            return true;
        } else {
            $("#validMnameChar").hide();
            $("#validMname").hide();
        }
    }
    // lname
    if (!lname.value) {
        $("#validLname").show();
        lname.focus();
        return true;
    }
    else {
        if (lname.value.length < 3) {
            $("#validLname").hide();
            $("#validLnameChar").show();
            lname.focus();
            return true;
        } else {
            $("#validLnameChar").hide();
            $("#validLname").hide();
        }
    }
    // date    
    if (!date.value) {
        $("#validDate").show();
        date.focus();
        return true;
    } else {
        $("#validDate").hide();
    }
    //phone
    let phoneVal = /^[0-9]+$/;
    if (!phone.value) {
        $("#validPhone").show();
        phone.focus();
        return true;
    } else {
        if (phone.value.length <= 9 || !phone.value.match(phoneVal)) {
            $("#validPhoneLen").show();
            $("#validPhone").hide();
            phone.focus();
            return true;
        } else {
            $("#validPhoneLen").hide();
            $("#validPinCode").hide();
        }
    }
    // gender :- male female other    
    if (!male.checked && !female.checked) {
        $("#validGender").show();
        male.focus();
        return true;
    } else {
        if (male.checked) {
            genderVal = male.value;
        } else if (female.checked) {
            genderVal = female.value;
        }
        $("#validGender").hide();
    }
    // add1
    if (!add1.value) {
        $("#validAdd1").show();
        add1.focus();
        return true;
    } else {
        $("#validAdd1").hide();
    }
    // country
    if (country.value == "Select Country") {
        $("#validCountry").show();
        country.focus();
        return true;
    } else {
        $("#validCountry").hide();
    }

    // state
    if (state.value == "Select State") {
        $("#validState").show();
        state.focus();
        return true;
    } else {
        $("#validState").hide();
    }
    // city
    if (city.value == "Select City") {
        $("#validCity").show();
        city.focus();
        return true;
    } else {
        $("#validCity").hide();


    }
    // pincode
    let pinVal = /^[0-9]+$/;
    if (!pincode.value) {
        $("#validPinCode").show();
        pincode.focus();
        return true;
    } else {
        if (pincode.value.length != 6 || !pincode.value.match(pinVal)) {
            $("#validPincodeSize").show();
            $("#validPinCode").hide();
            pincode.focus();
            return true;
        } else {
            $("#validPincodeSize").hide();
            $("#validPinCode").hide();
        }
    }
    //user
    let userName = /^[a-z0-9_\-]+$/;
    if (!user.value) {
        $("#validUser").show();
        user.focus();
        return true;
    } else {
        if (!user.value.match(userName)) {
            $("#validUser").hide();
            $("#validUser2").show();
            return true;

        } else {
            $("#validUser").hide();
            $("#validUser2").hide();
        }
    }
    //mail
    var mailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.value) {
        $("#validEmail").show();
        mail.focus();
        return true;
    } else {
        if (!mail.value.match(mailVal)) {
            $("#validEmail").hide();
            $("#validEmail2").show();
            return true;
        } else {
            $("#validEmail").hide();
            $("#validEmail2").hide();
        }
    }
    // password1
    let passVal = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!password1.value) {
        $("#validPass1").show();
        password1.focus();
        return true;
    } else {
        if (!password1.value.match(passVal)) {
            $("#validPass1").hide();
            $("#validPass1Check").show();
            return true;

        } else {
            $("#validPass1").hide();
            $("#validPass1Check").hide();
        }
    }
    // password2
    if (!password2.value) {
        $("#validPass2").show();
        password2.focus();
        return true;
    } else {
        if (password2.value == password1.value) {
            $("#validPass2").hide();
            $("#validPass2Match").hide();

        } else {
            $("#validPass2").hide();
            $("#validPass2Match").show();
            return true;
        }

    }
    // hobby : check1 check2 check3 checkAll
    if (!check1.checked && !check2.checked && !check3.checked) {
        $("#validHobby").show();
        check1.focus();
        return true;
    } else {
        $("#validHobby").hide();
    }
    //SKILL 
    if (skillArr.length == "0") {
        $("#validSkill").show();
        $("#skillInput").focus();
        return true;
    } else {
        $("#validSkill").hide();
    }

    //get hobby val array
    let isHobby = document.querySelectorAll(".hobby");
    for (let i = 0; i < isHobby.length - 1; i++) {
        let key = isHobby[i];
        if (key.checked) {
            hobbyArr.push(key.value);
        }
    }

    //updateSection
    if (isUpdate == true) {
        let updateObj = {
            index: updateId + 1,
            firstname: fname.value,
            middlename: mname.value,
            lastname: lname.value,
            date: date.value,
            phoneNo: phone.value,
            gender: genderVal,
            add1: add1.value,
            add2: add2.value,
            country: country.value,
            state: state.value,
            city: city.value,
            pincode: pincode.value,
            username: user.value,
            Email: mail.value,
            password: password1.value,
            hobby: hobbyArr,
            skill: skillArr
        }
        data2.splice(updateId, 1, updateObj)
        let tempRecord = JSON.stringify(data2);
        localStorage.setItem("allData", tempRecord);
        myfunction();
        hobbyArr = [];
        skillArr2 = [];
        isUpdate = false;
    }
    else {
        localStroge();
    }
    $("#Reset").click();
    $("#modalClose").click();
}

//localstroge section
function localStroge() {
    let oldData = localStorage.getItem("allData")
    let oldDataObj = JSON.parse(oldData);

    if (oldDataObj && oldDataObj.length != 0) {

        mykey = oldDataObj[oldDataObj.length - 1].index + 1;
        let lengthOfNewObjData = oldDataObj.length;
        localStorage.clear();

        for (let i = 0; i < lengthOfNewObjData; i++) {
            recordArr.push(oldDataObj[i]);
        }

    } else {
        mykey = 1;
    }

    recordArr.push({
        index: mykey,
        firstname: fname.value,
        middlename: mname.value,
        lastname: lname.value,
        date: date.value,
        phoneNo: phone.value,
        gender: genderVal,
        add1: add1.value,
        add2: add2.value,
        country: country.value,
        state: state.value,
        city: city.value,
        pincode: pincode.value,
        username: user.value,
        Email: mail.value,
        password: password1.value,
        hobby: hobbyArr,
        skill: skillArr
    });

    hobbyArr = [];
    skillArr2 = [];
    let tempRecord = JSON.stringify(recordArr);
    localStorage.setItem("allData", tempRecord);

    myfunction();
}

let data;
let data2;
let data2Temp;
function myfunction() {
    data = localStorage.getItem("allData")
    data2 = JSON.parse(data);
    data2Temp = data2;
    recordArr = [];

    if (data2)
        pagination();
}

//Record Delete section 
function deleteRecord(key) {
    // if (confirm("Record delete?")) {
    data2 = data2Temp;
    data2.splice(key, 1);

    for (let i = key; i < data2.length; i++) {
        const element = data2[i];
        element.index = element.index - 1;
    }

    let data3 = JSON.stringify(data2)
    localStorage.clear();
    localStorage.setItem("allData", data3);
    if (temp * (currentPage - 1) == data2.length && currentPage != 1) {
        start -= temp;
        currentPage--;
        endVal2 -= temp;
    }
    myfunction();
    if (data2.length == 0) {
        $("#pagiMainDiv").addClass("paginationHide");
        $("#pagiMainDiv").removeClass("paginationShow");
    }
    // }
    noDataFound();
}
$("#pagiMainDiv").addClass("paginationHide");
$("#pagiMainDiv").removeClass("paginationShow");
//pagination..................................................................
let start = 0;
let end = document.getElementById("pageRecordSize");
let endVal = end.value;
let temp = Number(endVal);
let endVal2 = Number(endVal);
let currentPage = 1;
$("#pageRecordSize").on("change", function () {
    start = 0;
    end = document.getElementById("pageRecordSize");;
    endVal = end.value;
    temp = Number(endVal);
    endVal2 = Number(endVal);

    currentPage = 1;
    pagination();
    pageMaker();
});

//call function 
function pagination() {
    let tableHTML = "";
    if (data2) {
        data2.forEach((item, i) => {
            if (i >= start && i < endVal2) {
                tableHTML += '<tr>';
                tableHTML += `<td>${item.index}</td>`;
                tableHTML += `<td>${item.firstname}</td>`;
                tableHTML += `<td>${item.middlename}</td>`;
                tableHTML += `<td>${item.lastname}</td>`;
                tableHTML += `<td>${item.date}</td>`;
                tableHTML += `<td>${item.phoneNo}</td>`;
                tableHTML += `<td>${item.gender}</td>`;
                tableHTML += `<td>${item.add1}</td>`;
                tableHTML += `<td>${item.add2}</td>`;
                tableHTML += `<td>${item.country}</td>`;
                tableHTML += `<td>${item.state}</td>`;
                tableHTML += `<td>${item.city}</td>`;
                tableHTML += `<td>${item.pincode}</td>`;
                tableHTML += `<td>${item.username}</td>`;
                tableHTML += `<td>${item.Email}</td>`;
                tableHTML += `<td><div class="input-group">
                    <input type="password" class=" form-control pass w-auto" value="${item.password}" 
                        id="passTable">
                    <div class="input-group-text" onclick="passTextChange(this)"
                        style="width: 40px;justify-content: center;"><i class="fa fa-eye-slash"
                            id="eye1" style="justify-content: center; font-size: 18px;"></i>
                    </div>
                </div></td>`;
                tableHTML += `<td>${item.hobby}</td>`;

                let arr = item.skill.map((val) => { return val.skill })
                tableHTML += `<td>${arr}</td>`;
                tableHTML += `<td><i class="btn fa-solid fa-trash-can text-danger" title="Delete record" id="deleteRecord" onclick="deleteRecord(${item.index - 1})"></i><i class="btn fa-regular fa-pen-to-square " title="Edit form" id="editRecord" onclick="editRecord(${item.index - 1})"></i></td>`;
                tableHTML += '</tr>';
            }
        });
    }
    $("#pagiMainDiv").removeClass("paginationHide");
    $("#pagiMainDiv").addClass("paginationShow");
    document.getElementById("tbody").innerHTML = tableHTML;
    pageMaker();
    defulatUpDown()
    // searchClear();
}

//page box Mmaker
let recordNum;
function pageMaker() {
    if (data2.length != 0) {
        recordNum = Math.ceil(data2.length / endVal);
        let Pages = document.getElementById("pageNumber")
        Pages.innerHTML = "";
        let allPages = '<li class="page-item pageBox  " id="page1"  onclick="goToPage(this)"><a class="page-link" href="javascript:void(0);" id="pageLink1">1</a></li>';
        let i;
        i = 1;
        while (i <= recordNum) {
            if (i == 1) {
                allPages += `<li class="page-item  dot" id="dot1" style="display : none;"><a class="page-link" href="javascript:void(0);">...</a></li>`;

            } else if (i == recordNum) {
                allPages += '<li class="page-item  dot" id="dot2" style="display : none;"><a class="page-link" href="javascript:void(0);">...</a></li>';

            } else {
                allPages += `<li class="page-item pageBox " id="page${i}" " onclick="goToPage(this)"><a class="page-link" href="javascript:void(0);" id="pageLink${i}">${i}</a></li>`;
            }
            i++;
        }
        if (recordNum > 1) {
            allPages += `<li class="page-item pageBox " id="page${recordNum}" onclick="goToPage(this)"><a class="page-link" href="javascript:void(0);" id="pageLink${recordNum}">${recordNum}</a></li>`;

        }
        Pages.innerHTML += allPages;
        let n = document.getElementsByClassName("pageBox");
        if (recordNum > 6) {
            console.log();
            for (let i = 1; i < n.length - 1; i++) {
                const element = n[i];
                element.style.display = "none";
                console.log(element)
            }
            if (currentPage >= 4) {
                $("#dot1").show();
                $("#page" + (currentPage - 1)).show();
                $("#page" + currentPage).show();
                $("#page" + (currentPage + 1)).show();
                $("#dot2").show();
            } else {
                $("#page" + 1).show();
                $("#page" + 2).show();
                $("#page" + 3).show();
                $("#page" + 4).show();
                $("#dot2").show();
            }
            if (currentPage > recordNum - 3) {
                $("#dot1").show();
                $("#page" + (recordNum - 2)).show();
                $("#page" + (recordNum - 3)).show();
                $("#dot2").hide();
            }
        }
        activePage(currentPage);
    }
}

//move to next page
function nextPage() {
    if (recordNum > currentPage) {
        start = endVal2;
        endVal2 += temp;
        currentPage += 1;
        console.log(currentPage)
        pagination();
        activePage(currentPage);
        console.log(start, endVal2)
    }
}

//move to previous page
function prevPage() {
    if (start != 0) {
        start = start - temp;
        endVal2 = endVal2 - temp;
        currentPage -= 1;
        console.log(start, endVal2)
        pagination();
        activePage(currentPage);
    }

}

//go to this page
function goToPage(ele) {
    let eleVal = ele.innerText;
    end = document.getElementById("pageRecordSize");
    endVal = end.value;
    temp = Number(endVal);
    endVal2 = temp;
    start = 0;
    for (let i = 0; i < eleVal - 1; i++) {
        start = endVal2;
        endVal2 += temp;
    }
    currentPage = Number(eleVal);
    pagination();
    activePage(eleVal);
    console.log(start, endVal2, currentPage);
    // console.log(ele, currentPage);
}



//for active page
function activePage(eleVal) {
    for (let i = currentPage; i <= recordNum; i++) {
        if (document.getElementById(`page${i}`) != null) {
            document.getElementById(`page${i}`).classList.add("active")
            if (i != eleVal) {
                document.getElementById(`page${i}`).classList.remove("active")
            }

        }
    }
}

//go to first page
function firstPage() {
    start = 0;
    end = document.getElementById("pageRecordSize");
    endVal = end.value;
    endVal2 = Number(endVal);
    currentPage = 1;
    pagination();
    activePage(currentPage);
}

//go to last page
function lastPage() {
    // console.log((start + endVal2 - 1));
    if (endVal2 <= data2.length) {
        // console.log(endVal2, recordNum);
        start = 0;
        currentPage = 1;
        for (let i = 0; i < recordNum; i++) {
            if (currentPage < recordNum) {
                start += (temp);
                currentPage += 1;
            }
        }
        endVal2 = Math.ceil(recordNum * endVal);
        currentPage = recordNum;
        console.log(start, endVal2, recordNum, temp);
        pagination();
        activePage(currentPage);

    }
}
//.........................................................................................

myfunction();

//create Table
function creatTable() {
    let tableHTML = "";
    if (data2) {
        data2.forEach((item, i) => {
            tableHTML += '<tr>';
            tableHTML += `<td>${item.index}</td>`;
            tableHTML += `<td>${item.firstname}</td>`;
            tableHTML += `<td>${item.middlename}</td>`;
            tableHTML += `<td>${item.lastname}</td>`;
            tableHTML += `<td>${item.date}</td>`;
            tableHTML += `<td>${item.phoneNo}</td>`;
            tableHTML += `<td>${item.gender}</td>`;
            tableHTML += `<td>${item.add1}</td>`;
            tableHTML += `<td>${item.add2}</td>`;
            tableHTML += `<td>${item.country}</td>`;
            tableHTML += `<td>${item.state}</td>`;
            tableHTML += `<td>${item.city}</td>`;
            tableHTML += `<td>${item.pincode}</td>`;
            tableHTML += `<td>${item.username}</td>`;
            tableHTML += `<td>${item.Email}</td>`;
            tableHTML += `<td><div class="input-group">
                    <input type="password" class=" form-control pass w-auto" value="${item.password}" 
                        id="passTable">
                    <div class="input-group-text" onclick="passTextChange(this)"
                        style="width: 40px;justify-content: center;"><i class="fa fa-eye-slash"
                            id="eye1" style="justify-content: center; font-size: 18px;"></i>
                    </div>
                </div></td>`;
            tableHTML += `<td>${item.hobby}</td>`;

            let arr = item.skill.map((val) => { return val.skill })
            tableHTML += `<td>${arr}</td>`;
            tableHTML += `<td><i class="btn fa-solid fa-trash-can text-danger" title="Delete record" id="deleteRecord" onclick="deleteRecord(${item.index - 1})"></i><i class="btn fa-regular fa-pen-to-square" title="Edit form" id="editRecord" onclick="editRecord(${item.index - 1})"></i></td>`;
            tableHTML += '</tr>';

        });
    }
    document.getElementById("tbody").innerHTML = tableHTML;
}

//password close open....
function passTextChange(elemnt) {
    let passTable = elemnt.parentElement.children[0];
    let eye = elemnt.firstChild;
    if (passTable.type == "password") {
        passTable.type = "text";
        eye.classList.toggle("fa-eye");
    } else {
        passTable.type = "password";
        eye.classList.toggle("fa-eye");
    }
}

//reset Form
function clearForm() {
    $("#validFnameChar").hide();
    $("#validFname").hide();
    $("#validMnameChar").hide();
    $("#validMname").hide();
    $("#validLnameChar").hide();
    $("#validLname").hide();
    $("#validDate").hide();
    $("#validPhoneLen").hide();
    $("#validPinCode").hide();
    $("#validGender").hide();
    $("#validAdd1").hide();
    $("#validCountry").hide();
    $("#validState").hide();
    $("#validCity").hide();
    $("#validPincodeSize").hide();
    $("#validPinCode").hide();
    $("#validUser").hide();
    $("#validUser2").hide();
    $("#validEmail").hide();
    $("#validEmail2").hide();
    $("#validPass1").hide();
    $("#validPass1Check").hide();
    $("#validPass2").hide();
    $("#validPass2Match").hide();
    $("#validHobby").hide();
    $("#validSkill").hide();
    $("#Reset").click();

}

//skill clear 
function clearSkill() {
    skillArr.splice(0, skillArr.length);
    skillMaker();
}

//Edit Record 
let isUpdate = false;
let updateId;
function editRecord(key) {
    isUpdate = true;
    updateId = key;
    $("#formOpenbtn").click();
    let updateData = localStorage.getItem("allData")

    let updateData2 = JSON.parse(updateData);
    fname.value = updateData2[key].firstname;
    mname.value = updateData2[key].middlename;
    lname.value = updateData2[key].lastname;
    date.value = updateData2[key].date;
    phone.value = updateData2[key].phoneNo;

    if (updateData2[key].gender == "Male") {
        male.checked = true;
    } else if (updateData2[key].gender == "Female") {
        female.checked = true;
    } else {
        other.checked = true;
    }
    add1.value = updateData2[key].add1;
    add2.value = updateData2[key].add2;
    country.value = updateData2[key].country;

    city.length = 1;
    state.length = 1;
    for (const y in Address[country.value]) {
        state.options[state.options.length] = new Option(y, y);

    }
    state.value = state.value = updateData2[key].state;
    city.length = 1;
    let z = Address[country.value][state.value];
    for (let i = 0; i < z.length; i++) {
        city.options[city.options.length] = new Option(z[i], z[i]);
    }
    city.value = updateData2[key].city;
    pincode.value = updateData2[key].pincode;
    user.value = updateData2[key].username;
    mail.value = updateData2[key].Email;
    password1.value = updateData2[key].password;
    password2.value = updateData2[key].password;

    updateData2[key].hobby.forEach((element, index) => {
        if (check1.value == element) {
            check1.checked = true;
        } else if (check2.value == element) {
            check2.checked = true;
        } else if (check3.value == element) {
            check3.checked = true;
        }
    });
    checkSelect();
    skillArr = updateData2[key].skill;
    skillMaker();

}


//filtering && serching 
$(document).ready(function () {
    $("#search").on("input", function () {
        $("#pageLink1").click();
        data2 = data2Temp;
        noDataFound();
        console.log(data2);
        filtering();
    })
});
//filtering
function filtering() {
    let input, tr, tdAll, table, inputVal, txtVal;
    input = document.getElementById("search");
    inputVal = input.value.toUpperCase().trim();
    table = document.getElementById("tbody")
    tr = table.getElementsByTagName("tr");

    let keyArr = [];
    data2.filter(myFunction);
    function myFunction(value, i, array) {
        for (const [key, objVal] of Object.entries(data2[i])) {
            if (`${objVal}`.toUpperCase().includes(`${inputVal}`)) {
                keyArr.push(value);
                return;
            }
        }
    }
    data2 = keyArr;
    pagination();
    if (keyArr.length == 0)
        filterNoData();
    console.log(keyArr);

    if (input.value == '' && data2.length != 0) {
        // pagination();
        searchClear();
        $("#pagiMainDiv").removeClass("paginationHide");
        $("#pagiMainDiv").addClass("paginationShow");
    }

}

//serching clear
function searchClear() {
    let input = document.getElementById("search");
    data2 = data2Temp;
    pagination();
    input.value = "";
}

//textarea
function resizeTextArea(add) {
    const { style, value } = add;

    // The 4 corresponds to the 2 2px borders (top and bottom):
    style.height = style.minHeight = 'auto';
    style.minHeight = `${Math.min(add.scrollHeight + 4, parseInt(add.style.maxHeight))}px`;
    style.height = `${add.scrollHeight + 4}px`;
}

// let add1 = document.getElementById('add1');

add1.addEventListener('input', () => {
    resizeTextArea(add1);
    changeText();
});
add2.addEventListener('input', () => {
    resizeTextArea(add2);
    changeText();
});

function noDataFound() {
    let x = data2.length;
    if (x == 0) {
        $("#pagiMainDiv").removeClass("paginationShow");
        $("#pagiMainDiv").addClass("paginationHide");
        let tableHTML = "";
        tableHTML += '<tr>';
        tableHTML += `<td colspan="20" style="text-align: center; color:#ff2046;">No Data found</td>`;
        tableHTML += '</tr>';
        document.getElementById("tbody").innerHTML = tableHTML;
    }
}
function filterNoData() {
    $("#pagiMainDiv").removeClass("paginationShow");
    $("#pagiMainDiv").addClass("paginationHide");
    let tableHTML = "";
    tableHTML += '<tr>';
    tableHTML += `<td colspan="20" style="text-align: center; color:#ff2046;">No Data found</td>`;
    tableHTML += '</tr>';
    document.getElementById("tbody").innerHTML = tableHTML;
}
//sorting..............
let temp1 = false;
let count = 1;
let varialble = 0;
function arrowShowHide(ind) {
    let ele = $("#theadTr").children();
    if (varialble != ind) {
        varialble = ind
        temp1 = false;
    }
    let x = ele[ind];
    console.log(x);
    let children = ele[ind].childNodes;
    defulatUpDown();
    children[2].classList.add("d-none");
    children[3].classList.add("d-none");
    children[1].classList.add("d-none");
    if (!temp1) {
        children[2].classList.remove("d-none");
        children[3].classList.add("d-none");
        temp1 = true;
    } else if (temp1) {
        children[2].classList.add("d-none")
        children[3].classList.remove("d-none");
        temp1 = false;
    }


}
function defulatUpDown() {
    let Default = document.getElementsByClassName("default")
    let up = document.getElementsByClassName("fa-sort-up")
    let down = document.getElementsByClassName("fa-sort-down")
    for (let i = 0; i < Default.length; i++) {
        let val = Default[i];
        val.classList.remove("d-none")
    }
    for (let i = 0; i < up.length; i++) {
        let val = up[i];
        val.classList.add("d-none")
    }
    for (let i = 0; i < down.length; i++) {
        let val = down[i];
        val.classList.add("d-none")
    }
}
function sortTable(tableClass, n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementsByClassName(tableClass)[0];
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");    
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            var xContent = (isNaN(x.innerHTML)) 
                ? (x.innerHTML.toLowerCase() === '-')
                      ? 0 : x.innerHTML.toLowerCase()
                : parseFloat(x.innerHTML);
            var yContent = (isNaN(y.innerHTML)) 
                ? (y.innerHTML.toLowerCase() === '-')
                      ? 0 : y.innerHTML.toLowerCase()
                : parseFloat(y.innerHTML);
            if (dir == "asc") {
                if (xContent > yContent) {
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (xContent < yContent) {
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
     }
}