console.log('App.js cargado');

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM listo');

  const nameInput = document.getElementById('name');
  const message = document.getElementById('message');
  const greetBtn = document.getElementById('greetBtn');
  const clearBtn = document.getElementById('clearBtn');

  console.log({ nameInput, message, greetBtn, clearBtn });

  if (!nameInput || !message || !greetBtn || !clearBtn) {
    console.error('Faltan elementos en el HTML');
    return;
  }

  greetBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    message.textContent = name ? 'Hola, ' + name : 'Hola Mundo';
  });

  clearBtn.addEventListener('click', function () {
    nameInput.value = '';
    message.textContent = 'Hola Mundo';
  });
});