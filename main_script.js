// setting the menu button open and close the menu
  // setting the variables
let menu_button_open = document.getElementById('menu_button');
let menu_aside = document.getElementById('menu_aside');
let menu_button_close = document.getElementById('menu_button_aside');


  // opnening the menu 

  menu_button_open.addEventListener('click', () =>{
    menu_aside.style.display = 'flex';
    menu_aside.setAttribute('aria-expanded', 'true');
  })

  // closing the menu
  menu_button_close.addEventListener('click', () =>{
    menu_aside.style.display = 'none';
    menu_aside.setAttribute('aria-expanded', 'false');

  })




// setting the width os the video title match the video width and the title of the playlist as well
function uptade_video_width(){
    let video = document.getElementById('player_video');
    let video_title = document.getElementById('video_title');
    let video_width = video.offsetWidth;

    video_title.style.width = `${video_width}px`;
}

function uptade_title_width(){
  let title_playlist = document.querySelector('.playlist_title').offsetWidth;
  let width_item = document.querySelector('.video_item');
  let title_item = document.querySelector('.video_info_h4');

  width_item.style.width = `${title_playlist + 3}px`
  title_item.style.width = `${width_item.offsetWidth}px`;
}

window.addEventListener('resize', uptade_video_width,uptade_title_width );
window.addEventListener('DOMContentLoaded', uptade_video_width,uptade_title_width)




// making the components on details_main_video with the same hight

let actions_user_section = document.getElementById('actions_user').offsetHeight;

let youtuber_profile_section = document.getElementById('youtuber_profile');
let youtuber_proile_high = actions_user_section
youtuber_profile_section.style.height = `${youtuber_proile_high}px`;


let buttons_user_actions_section = document.getElementById('buttons_user_actions');
let buttons_user_actions_hight = actions_user_section
buttons_user_actions_section.style.height = `${buttons_user_actions_hight}px`;



// changing text html according the screen size

function text_uptade(){
    let text_share = document.getElementById('share_text');
    let window_width = window.innerWidth;

    if(window_width <= 801){
        text_share.style.display = 'none';
    } else{
        text_share.style.display = 'inline'
    }
}

window.addEventListener('DOMContentLoaded', text_uptade);
window.addEventListener('resize', text_uptade);




function same_hight(){
  let video_section = document.querySelector('.main_video_section').offsetHeight;
  let playlist_section = document.querySelector('.playlist_list')

  playlist_section.style.height = `${video_section}px`;
}

window.addEventListener('DOMContentLoaded', same_hight);
window.addEventListener('resize', same_hight);






