

var grid = document.createElement("div")
grid.classList.add("grid")
grid.setAttribute("id", "grid")

var btndiv=document.createElement("div")



var btn = document.createElement("input")
btn.setAttribute("id", "btn")
btn.setAttribute("type", "image")
btn.setAttribute("src","https://iranea.org/wp-content/uploads/2019/12/calendar-icon-png-transparent-calendar-line-icon-png-png.png")

btndiv.appendChild(btn)


const btndivStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
Object.assign(btndiv.style, btndivStyles);



const btnStyles = {
    height:"40%",
    width:"40%",
    textAlign:"center",
    marginTop:"20%",
    
    backgroundColor:'white',
    border:"solid",


}
Object.assign(btn.style, btnStyles);





const styles = {
    backgroundColor: 'white',
    display: 'block',
    float: 'left',
    position: 'absoulte',
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateColumns: '50% 60%',
    borderRadius: '30px'

};
Object.assign(grid.style, styles);


const stylesRight = {
    position: 'realtive',
    color: "black",
    marginTop: "20px",
    backgroundTolor: 'white',
    marginLeft: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 30px)',
    gridTemplateRows: 'repeat(6, 30px)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    border: 'none',
    borderRadius: '30px',

}


const stylesLeft = {

    color: 'white',
    textAlign: 'center',
    fontFamily: 'Droid Sans Mono',
    fontWeight: 'normal',
    color: 'white',
    fontSize: '15px',
    backgroundColor: '#ee4657',
    borderRight: 'white',
    border: 'none',
    borderRadius: '30px',
}

const stylesMonth = {
    display: 'inline',
}


const stylesYear = {

    textAlign: 'center',
    paddingLeft: '5%',
    display: 'inline',
    // letterSpacing: '20px',
}


const stylesdownArrow = {
    transform: 'rotate(180deg)',
    width: '15px',
}




const stylesupArrow = {
    width: '15px',
}

const stylesdownArrowYear = {
    transform: 'rotate(180deg)',
    width: '20px',
}

const stylesupArrowYear = {
    width: '20px',
}






var leftcontainer = document.createElement("div")
leftcontainer.classList.add("leftcontainer")
leftcontainer.appendChild(btndiv)



var yearcontainerduv = document.createElement("div")
leftcontainer.appendChild(yearcontainerduv)


var leftimgYear = document.createElement("input")
leftimgYear.setAttribute("type", "image")
leftimgYear.setAttribute("src", "https://img.icons8.com/carbon-copy/2x/arrow.png")
leftimgYear.id = "downArrowYear"
Object.assign(leftimgYear.style, stylesdownArrowYear)

yearcontainerduv.appendChild(leftimgYear)

var yeardiv = document.createElement("div")
yeardiv.id = "year"
yeardiv.innerHTML = "year"
Object.assign(yeardiv.style, stylesYear)

yearcontainerduv.appendChild(yeardiv)

var rightimgyear = document.createElement("input")
rightimgyear.setAttribute("type", "image")
rightimgyear.setAttribute("src", "https://img.icons8.com/carbon-copy/2x/arrow.png")
rightimgyear.id = "upArrowYear"
Object.assign(rightimgyear.style, stylesupArrowYear)

yearcontainerduv.appendChild(rightimgyear)

yearcontainerduv.style.marginTop = "30px"




var leftimg = document.createElement("input")
leftimg.setAttribute("type", "image")
leftimg.setAttribute("src", "https://img.icons8.com/carbon-copy/2x/arrow.png")
leftimg.id = "downArrow"
Object.assign(leftimg.style, stylesdownArrow)

leftcontainer.appendChild(leftimg)

var monthdiv = document.createElement("div")
monthdiv.id = "month"
monthdiv.innerHTML = "month"
Object.assign(monthdiv.style, stylesMonth)

monthdiv.style.marginTop = "30px"


leftcontainer.appendChild(monthdiv)

var rightimg = document.createElement("input")
rightimg.setAttribute("type", "image")
rightimg.setAttribute("src", "https://img.icons8.com/carbon-copy/2x/arrow.png")
rightimg.id = "upArrow"
Object.assign(rightimg.style, stylesupArrow)

leftcontainer.appendChild(rightimg)


var daydiv = document.createElement("div")
daydiv.id = "day"
daydiv.innerHTML = "day"

leftcontainer.appendChild(daydiv)
Object.assign(leftcontainer.style, stylesLeft)

grid.appendChild(leftcontainer)



var rightcontainer = document.createElement("div")
rightcontainer.classList.add("rightcontainer")
Object.assign(rightcontainer.style, stylesRight);

var dayarray = ["Sa", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
for (let index = 0; index < dayarray.length; index++) {

    var daydiv = document.createElement("div")
    daydiv.innerHTML = dayarray[index]
    daydiv.classList.add("dayrow")
    rightcontainer.appendChild(daydiv)
}
grid.appendChild(rightcontainer)


// grid.style.display="none"
// btn.addEventListener("click",event =>{
//     grid.style.display="block"
// })
document.body.appendChild(grid)

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = document.getElementById("year")
var month = document.getElementById("month")
var day = document.getElementById("day")
var rightparent = document.getElementsByClassName("rightcontainer")[0]
var currentMonth = d.getMonth()
var currentyear = d.getFullYear()
var upArrow = document.getElementById("upArrow")
var downArrow = document.getElementById("downArrow")
var upArrowYear = document.getElementById("upArrowYear")
var downArrowYear = document.getElementById("downArrowYear")
var upArrowYear
month.innerHTML = months[d.getMonth()];
year.innerHTML = d.getFullYear()
day.innerHTML = d.getDate()
listDays(d.getMonth())
markCurrentDay()



upArrow.addEventListener("click", up);
downArrow.addEventListener("click", down);

upArrowYear.addEventListener("click", upyear);
downArrowYear.addEventListener("click", downyear);


function upyear() {
    currentyear++
    year.innerHTML = currentyear
    deleteDays()
    listDays(currentMonth)
    markCurrentDay()


}


function downyear() {
    currentyear--
    year.innerHTML = currentyear
    deleteDays()
    listDays(currentMonth)
    markCurrentDay()
}

btn.addEventListener("click",hide)

function hide(){
    if(rightcontainer.style.display==("none"))
    {
        rightcontainer.style.display=("grid")
    }

    else if(rightcontainer.style.display=("block"))

    {
        rightcontainer.style.display=("none")
    }
    
}








//arrow ++ 
function up() {
    deleteDays()
    currentMonth++

    if (currentMonth == 11) {

        currentMonth = 0
        currentyear++
    }
    year.innerHTML = currentyear
    month.innerHTML = months[currentMonth];
    listDays(currentMonth)
    markCurrentDay()



}

//arrow --
function down() {
    deleteDays()
    currentMonth--

    if (currentMonth == -1) {
        currentMonth = 11
        currentyear--
    }

    console.log(currentMonth);

    year.innerHTML = currentyear
    month.innerHTML = months[currentMonth];
    listDays(currentMonth)
    markCurrentDay()


}


// number of days in each month 
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


// list the days of each month 
function listDays(currentMonth) {

    for (let index = 1; index <= daysInMonth(currentMonth + 1, currentyear); index++) {

        let firstDay = (new Date(currentyear, currentMonth)).getDay();

        var childnode = document.createElement("div")
        if (index == 1) {
            childnode.style.gridColumnStart = firstDay + 1
        }
        childnode.classList.add("r");
        childnode.innerHTML = index
        rightparent.appendChild(childnode)



    }


}

//clear the days before adding the updated one according to the month 
function deleteDays() {

    document.querySelectorAll('.r').forEach(function (a) {
        a.remove()
    })


}



// mark the current day 
function markCurrentDay() {
    var allDays = document.getElementsByClassName("r")
    for (let index = 0; index < allDays.length; index++) {

        if (allDays[index].innerHTML == d.getDate() && currentMonth == d.getMonth() && currentyear == d.getFullYear()) {


            allDays[index].style.color = "red"

        }

    }


}


document.querySelectorAll('.r').forEach(item => {
    item.addEventListener('click', event => {
        console.log(`${item.innerHTML}/${currentMonth + 1}/${currentyear}`);

    })
})

