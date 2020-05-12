/*global MOT_Plugin,console,extend*/
var CalenderPlugin = (function () {
    var CalenderPlugin = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "CalenderPlugin";
        self.SetParameterValue("PluginWidth", "380");
        self.SetParameterValue("PluginHeight", "200");
        self.SetParameterValue("PluginName", self.PluginType);
        self.Parameters.PluginWidth = self.addPluginParameters("PluginWidth", "input", "380", "Plugin Width", "Set width in pixels. It works only when 'multiple lines' parameter is checked");
        self.Parameters.PluginHeight = self.addPluginParameters("PluginHeight", "input", "200", "Plugin Height", "Set Plugin Height");
        self.Parameters.MultipleLine = self.addPluginParameters("MultipleLine", "True/False", 0, "Multiple lines", "Enable/disable multiple lines to control the width and hight of label");
        self.Parameters.Scroll = self.addPluginParameters("Scroll", "True/False", 0, "Scroll", "Enable/disable Scroll feature when multiple lines parameter is true");
        self.Parameters.HasBorder = self.addPluginParameters("HasBorder", "True/False", 0, "Show border", "Show/hide border");
        self.Parameters.BorderRounded = self.addPluginParameters("BorderRounded", "True/False", 0, "Rounded borders", "Enable/disable rounded border edges");
        self.Parameters.TextRotation = self.addPluginParameters("TextRotation", "Select", ["rotate(0deg)", "rotate(90deg)", "rotate(270deg)"], "Rotation", "Select rotation angle for text");
        self.Parameters.TextRotation.addProperty("SelectedValue", "rotate(0deg)");
        self.Parameters.FontSize = self.addPluginParameters("FontSize", "Select", ["6px","8px","10px","12px","14px", "17px", "20px", "22px", "24px", "26px", "28px"], "Font size", "Select font size");
        self.Parameters.FontSize.addProperty("SelectedValue", "14px");
        self.Parameters.FontFamily = self.addPluginParameters("FontFamily", "Select", ["Arial", "Courrier New", "Times New Roman"], "Font Family", "The fontFamily property sets a list of font-family names for text");
        self.Parameters.FontFamily.addProperty("SelectedValue", "Arial");
        self.Parameters.PluginVersion = self.addPluginParameters("PluginVersion", "label", "", "Version", "plugin version");
        self.Parameters.FontStyle = self.addPluginParameters("FontStyle", "Select", ["normal", "italic", "oblique", "initial"], "Font style", "Select font style");
        self.Parameters.FontStyle.addProperty("SelectedValue", "normal");
        self.Parameters.FontWeight = self.addPluginParameters("FontWeight", "Select", ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "Font weight", "Select font weight");
        self.Parameters.FontWeight.addProperty("SelectedValue", "normal");
        self.Parameters.BorderColor = self.addPluginParameters("BorderColor", "color", "#000000", "Border color", "Set border color");
        self.Parameters.FontColor = self.addPluginParameters("FontColor", "color", "#000000", "Font color", "Set font color");
        self.Parameters.BackGroundColor = self.addPluginParameters("BackGroundColor", "color", "#ee4657", "Background color", "Set background color");
        self.Parameters.BorderRounded = self.addPluginParameters("BorderRounded", "True/False", 0, "Rounded border", "Enable/disable rounded border");
        self.Parameters.BorderThikness = self.addPluginParameters("BorderThikness", "input", "2", "Border thikness", "Set border thikness in pixel");
        self.Parameters.BorderStyle = self.addPluginParameters("BorderStyle", "Select", ["solid", "dashed", "dotted"], "Border style", "Select boreder style");
        self.Parameters.BorderStyle.addProperty("SelectedValue", "solid");
        self.Parameters.DataSource = self.addPluginParameters("DataSource", "SensorsList", ["No Sensor", "No Reading"], "Data Source", "Select Data Source");

    };
    extend(CalenderPlugin, MOT_Plugin);
    CalenderPlugin.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);




        var grid = document.createElement("div")
        grid.classList.add("grid")
        grid.setAttribute("id", "grid")


        var btndiv = document.createElement("div")



        var btn = document.createElement("input")
        btn.setAttribute("id", "btn")
        btn.setAttribute("type", "image")
        btn.setAttribute("src", "https://iranea.org/wp-content/uploads/2019/12/calendar-icon-png-transparent-calendar-line-icon-png-png.png")

        btndiv.appendChild(btn)


        const btndivStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        Object.assign(btndiv.style, btndivStyles);



        const btnStyles = {
            height: "40%",
            width: "40%",
            textAlign: "center",
            marginTop: "20%",

            backgroundColor: 'white',
            border: "solid",


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
            fontSize: '25px',
            backgroundColor: '#ee4657',
            borderRight: 'white',
            border: 'none',
            borderRadius: '30px',
        }

        const stylesMonth = {
            display: 'inline',
        }

        const yearDivContainerStyles={
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }
    


        const stylesYear = {


            textAlign: 'center',
            // paddingLeft: '5%',
            display: 'inline',

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




        // var btn = document.createElement("button")


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
        Object.assign(yearcontainerduv.style, yearDivContainerStyles);

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


        var daypicker = document.createElement('div')
        daypicker.id = "daypicker"
        leftcontainer.appendChild(daypicker)
        daypicker.style.fontSize = "10px"

        grid.appendChild(leftcontainer)

        // btn.addEventListener("click")






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
        WorkSpace.appendChild(grid);





        var d = new Date();
        var n = d.getTime() * Math.random();
        grid.id = n;
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
        month.innerHTML = months[d.getMonth()];
        year.innerHTML = d.getFullYear()
        day.innerHTML = d.getDate()
        listDays(d.getMonth())
        markCurrentDay()

        grid.style.fontSize = this.GetParameterByName("FontSize").SelectedValue;
        leftcontainer.style.fontSize = this.GetParameterByName("FontSize").SelectedValue;
        grid.style.fontStyle = this.GetParameterByName("FontStyle").SelectedValue;
        grid.style.fontWeight = this.GetParameterByName("FontWeight").SelectedValue;
        grid.style.color = this.GetParameterValue("FontColor");
        grid.style.fontFamily = this.GetParameterByName("FontFamily").SelectedValue;
        grid.style.width = "max-content";
        leftcontainer.style.backgroundColor = this.GetParameterValue("BackGroundColor");

        grid.style.fontWeight = this.GetParameterByName("FontWeight").SelectedValue;
        WorkSpace.style.transform = this.GetParameterByName("TextRotation").SelectedValue;



        grid.style.width = `${this.GetParameterValue("PluginWidth")}px`
        grid.style.height = `${this.GetParameterValue("PluginHeight")}px`

        upArrow.addEventListener("click", up);
        downArrow.addEventListener("click", down);

        upArrowYear.addEventListener("click", upyear);
        downArrowYear.addEventListener("click", downyear);

        btn.addEventListener("click", hide)

        function hide() {
            if (rightcontainer.style.display == ("none")) {
                rightcontainer.style.display = ("grid")
            }

            else if (rightcontainer.style.display = ("block")) {
                rightcontainer.style.display = ("none")
            }

        }




        function upyear() {

            currentyear++
            year.innerHTML = currentyear
            deleteDays()
            listDays(currentMonth)
            markCurrentDay()
            dayPicker()

        }


        function downyear() {

            currentyear--
            year.innerHTML = currentyear
            deleteDays()
            listDays(currentMonth)
            markCurrentDay()
            dayPicker()
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
            dayPicker()



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
            dayPicker()


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
        dayPicker()

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

        function dayPicker() {
            document.querySelectorAll('.r').forEach(item => {
                item.addEventListener('click', event => {
                    daypicker.innerHTML = ""
                    console.log(`${item.innerHTML}/${currentMonth + 1}/${currentyear}`);
                    daypicker.innerHTML = `${item.innerHTML}/${currentMonth + 1}/${currentyear}`

                })
            })

        }

        self.addCssClasses(grid);
    };

    return CalenderPlugin;
}());
