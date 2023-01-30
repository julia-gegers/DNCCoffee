function openModal(){
    let container = document.getElementById('modalContainer');
    container.style.display = 'block';
    return;

}

function closeModal(){
    let container = document.getElementById('modalContainer');
    container.style.display = 'none';
    return;
}

function showBtn(btnId){
    let btn = document.getElementById(btnId)
    btn.style.display = 'block'
}

function some(btnId){
    let btn = document.getElementById(btnId)
    btn.style.display = 'none'
}