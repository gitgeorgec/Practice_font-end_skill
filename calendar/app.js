let date = new Date
let thisYear = date.getFullYear()
let thisMonth = date.getMonth()
let thisDateDay = date.getDate()
let thisWeekDay =date.getDay()
let month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
let month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
let monthName =["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
let showYear = document.querySelector(".year")
let showMonth = document.querySelector('.month')
let dateFrom = document.querySelector(".date") 
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

function getStartWeekDay(year, month){
    let startDay = new Date(year,month,1)
    return startDay.getDay()
}

function getMonthDate(year,month){
    if((year%4===0 && year%100!==0)||(year%400 ===0 && year%3200 !==0)){
        return month_olympic[month]
    }else{
        return month_normal[month]
    }
}

function renderDate(year, month){
    showYear.innerText = thisYear
    showMonth.innerText = monthName[thisMonth]
    dateFrom.innerHTML=""
    let totalDate = getMonthDate(year,month)
    let startDay = getStartWeekDay(year, month)
    for(let i=0; i< startDay; i++){
        let emptyDay = document.createElement("div")
        emptyDay.classList.add("date__day")
        dateFrom.appendChild(emptyDay)
    }

    for(let i=0; i< totalDate; i++){
        let dateDay = document.createElement("div")
        dateDay.classList.add("date__day")
        dateDay.innerText = i+1
        dateFrom.appendChild(dateDay)
    }
}

next.addEventListener("click", ()=>{
    if(thisMonth<11){
        thisMonth++
    }else{
        thisYear++
        thisMonth=0
    }
    renderDate(thisYear,thisMonth)
})

prev.addEventListener("click",()=>{
    if(thisMonth>0){
        thisMonth--
    }else{
        thisYear--
        thisMonth=11
    }
    renderDate(thisYear,thisMonth)
})

renderDate(thisYear,thisMonth)