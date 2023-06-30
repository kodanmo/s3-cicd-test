function toggleDropdown() {
    var dropdown = document.getElementById("dropdownOptions");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  }
  
  function selectOption(value) {
    var selectedValue = document.getElementById("selectedValue");
    selectedValue.textContent = value;
    toggleDropdown();
  }


/*const drops=document.querySelectorAll('.drop')
console.log("hello")
console.log(drops)
drops.forEach(drop=>{
    const s=drop.querySelector('.select')
    const c=drop.querySelector('.caret')
    const m=drop.querySelector('.menu')
    const o=drop.querySelector('.menu li')
    const se=drop.querySelector('.selected')
    console.log("inside");



    s.addEventListener('click',()=>{
        s.classList.toggle('select-clicked');
        m.classList.toggle('menu-open');
    })



    o.forEach(o=>{
        o.addEventListener('click',()=>{
            se.innerHTML=o.innerHTML;
            s.classList.remove('select-clicked');
            m.classList.remove('menu-open')

            o.forEach(o=>{
                o.classList.remove('active');
            })

            o.classList.add('active')
        })
    })

});*/


