let coursehover = document.getElementById('coursehover');
let subcourses = document.getElementById('sbc');
let collapse = document.getElementById('collapse');
let navbar = document.getElementById('navbar');
let cancel = document.getElementById('cancel');

cancel.addEventListener('click', function(){
    navbar.style.display="none"
    collapse.style.display="block"
    cancel.style.display="none"
})

collapse.addEventListener('click', function(){
    navbar.style.display="block"
    collapse.style.display="none"
    cancel.style.display="block"
})

coursehover.addEventListener('mouseover', function () {
    subcourses.style.display = "block"
});

coursehover.addEventListener('mouseout', function () {
    subcourses.style.display = "none"
});