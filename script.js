const markRead = document.querySelector('.mark_as_read');
const newNotifs = document.querySelectorAll('.new_notif');
const countResult = document.querySelector('.new_notifs_counter');

const notifs = document.querySelectorAll('.notification');

function updateCount(){
    const notifCount = document.querySelectorAll('.new_notif').length;
    countResult.textContent = notifCount ;
    countResult.style.display = notifCount === 0 ? "none" : "inline-block"; //si le compteur est a 0 le display passe a none ou
}

updateCount();

markRead.addEventListener('click', () =>{  //tout marquer comme lu
    newNotifs.forEach(notif => {
        notif.classList.remove('new_notif');
        countResult.style.display = "none";
    })  
    updateCount();
})

newNotifs.forEach(notif => {
    notif.addEventListener('click', () => {
        notif.classList.remove('new_notif');
        updateCount();
    })
    
})

