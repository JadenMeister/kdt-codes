

function clock() {
  let now = new Date()
  let hours = now.getHours().toString().padStart(2, '0')
  let minutes = now.getMinutes().toString().padStart(2, '0')
  let seconds = now.getSeconds().toString().padStart(2, '0')


  let time = `${hours} : ${minutes} : ${seconds}`
  document.getElementById('clock').textContent = time;

  
}


setInterval(clock, 1000)

  clock()

  console.error()




