let url  = "http://universities.hipolabs.com/search?country=india&name="
let btn = document.querySelector("button")

btn.addEventListener("click",async () =>{
    let st = document.querySelector("input").value
    let colArr = await sendRequest(url+st)
    console.log(colArr)
    showList(colArr)
})

async function sendRequest (state) {
    try{
        let ArrayOfCollege = await axios.get(state)
        return ArrayOfCollege.data
    }catch(e){
        console.log("error: ",e)
    }
}

function showList (Arr) {
    let ul = document.querySelector('ul')
    for(a of Arr){
        let li = document.createElement('li')
        console.log(a.name)
        li.innerText = a.name
        ul.appendChild(li)
    }

}