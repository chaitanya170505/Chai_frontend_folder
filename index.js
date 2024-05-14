let profile = document.getElementById('profile');
let profile_click = document.getElementById('logo-container');
let click_check = false;
let close=document.getElementById('close');


profile_click.addEventListener('click', function() {
   if (!click_check) {
        profile.classList.add('contact_profile2');
        click_check = true;
   } else {
        profile.classList.remove('contact_profile2');
       
        click_check = false;
   }
});

 close.addEventListener('click',function(){
            profile.classList.remove('contact_profile2');
            click_check = false;
        });