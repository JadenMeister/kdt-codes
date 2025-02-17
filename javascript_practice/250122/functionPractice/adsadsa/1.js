

const wheel = document.getElementById('wheel');
        const result = document.getElementById('result');
        const spinButton = document.getElementById('spinButton');
        let items = ['깁밥', '떡볶이', '피자', '햄버거', '김치찌개', '된장찌개', '파스타'];
        let currentRotation = 0;
        function drawWheel() {
          wheel.innerHTML = '';
          const sliceAngle = 360 / items.length;
          items.forEach((item, index) => {
              const slice = document.createElement('div');
              slice.className = 'slice';
              slice.style.background = index % 2 === 0 ? '#F1C40F' : '#E74C3C';
              slice.style.transform = `rotate(${index * sliceAngle}deg)`;
              const text = document.createElement('div');
              text.style.position = 'absolute';
              text.style.width = '100%';
              text.style.transform = `rotate(${sliceAngle / 2}deg) translate(20%, -50%) rotate(${-(index * sliceAngle + sliceAngle / 2)}deg)`;
              text.style.fontSize = '14px';
              text.style.color = 'white';
              text.textContent = item;
              slice.appendChild(text);
              wheel.appendChild(slice);
          });
      }
      function spinWheel() {
          const randomSpin = Math.floor(3600 + Math.random() * 360);
          currentRotation += randomSpin;
          const sliceAngle = 360 / items.length;
          const selectedIdx = Math.floor((360 - (currentRotation % 360)) / sliceAngle) % items.length;
          wheel.style.transform = `rotate(${currentRotation}deg)`;
          setTimeout(() => {
              result.textContent = `You got: ${items[selectedIdx]}!`;
              spinButton.textContent = 'Spin Again';
          }, 3000);
      }
      function addItem() {
          const newItem = document.getElementById('newItem').value.trim();
          if (newItem) {
              items.push(newItem);
              document.getElementById('newItem').value = '';
              drawWheel();
          }
      }
      drawWheel();