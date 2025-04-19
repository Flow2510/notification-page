const markRead = document.querySelector('.mark_as_read');
const newNotifs = document.querySelectorAll('.new_notif');
const countResult = document.querySelector('.new_notifs_counter');
const notifCount = document.querySelectorAll('.new_notif').length;

function updateCount(){
    countResult.textContent = notifCount ;
}

updateCount();

markRead.addEventListener('click', () =>{  //tout marquer comme lu
    newNotifs.forEach(notif => {
        notif.classList.remove('new_notif');
        countResult.style.display = "none";
    })
    
})
