const textEl = document.getElementById('text');

switchBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
   document.body.classList.toggle('light-mode');

   if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark")
    textEl.textContent = `🌞 Switch to Light Mode`;
   }
   else{
    localStorage.setItem("theme","light")
    textEl.textContent = `🌙 Switch to dark Mode`;
   }
})
