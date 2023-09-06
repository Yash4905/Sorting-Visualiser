// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}




// disabling all buttons
function disable_sorting(){
    document.querySelector(".bubbleSort").disabled=true;
    document.querySelector(".selectionSort").disabled=true;
    document.querySelector(".insertionSort").disabled=true;
    document.querySelector(".quickSort").disabled=true;
    document.querySelector(".mergeSort").disabled=true;
    console.log("disabling button");
}



// enable buttons
function enable_sorting(){
    document.querySelector(".bubbleSort").disabled=false;
    document.querySelector(".selectionSort").disabled=false;
    document.querySelector(".insertionSort").disabled=false;
    document.querySelector(".quickSort").disabled=false;
    document.querySelector(".mergeSort").disabled=false;
    // console.log("enabling button");
}

// disable size slife
function disable_size_slider(){
    document.querySelector("#arr_sz").disabled=true;
}

// enable size slider
function enable_size_slider(){
    document.querySelector("#arr_sz").disabled=false;
}

// disable new array btn
function disable_new_array(){
    document.querySelector(".new-array").disabled = true;
}

// enable new array btn
function enable_new_array(){
    document.querySelector(".new-array").disabled = false;
    console.log("enabling");
    // document.querySelector(".new-array").style.color = "yellow";
}

// disable_new_array();

// asyn function to wait for sorting animation to compelet;
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


// taking delay 
let delay = 260;
let speed = document.querySelector("#speed_input");
speed.addEventListener("input",()=>{
   delay = 320-parseInt(speed.value);
//    console.log(delay);
})



//taking size

let  sz = document.querySelector("#arr_sz");
sz.addEventListener("input",()=>{
       let arr_size = sz.value;
       create_new_array(parseInt(arr_size));
    //    console.log(arr_size);
})

// onload array get dispalye
let arr = [];
// disable_sorting();
create_new_array();


// creating random array of given size
function create_new_array(bar_no = 50){
    // deleting exsting bars
    deleteChild();
    
    for(let i=0;i<bar_no;i++){
        arr[i] = (Math.floor(Math.random() * 250) + 1);
        // console.log(typeof(arr[i]));
    }

     const bars = document.querySelector("#bars");

      for(let i=0;i<bar_no;i++){
            let new_div = document.createElement("div");
            new_div.classList.add("flex-item");
            new_div.classList.add("bar");
            new_div.classList.add(`barNo${i}`);
            new_div.style.height = arr[i]*2+"px";
            bars.appendChild(new_div);
      }
};

// deleting old array
function deleteChild(){
    const bars = document.querySelector("#bars");
    bars.innerHTML = "";
};




const new_array_btn = document.querySelector(".new-array");
new_array_btn.addEventListener("click",()=>{
    create_new_array();
    enable_sorting();
    enable_size_slider();
});





