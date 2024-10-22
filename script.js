const data = {
    "categories": [
      // PISCINA
      {
        "name": "PISCINA",
        "images": [
          {
            "src": "imagen1.jpg",
            "alt": "Piscina",
            "description": "Piscina en medio de la naturaleza"
          },
          {
            "src": "piscina1.jpg",
            "alt": "Piscina",
            "description": "Piscina increíble en hermosa casa mediterránea"
          },
          {
            "src": "piscina2.jpg",
            "alt": "Piscina",
            "description": "Piscina con sofisticado paisaje y genial cascada"
          },
          {
            "src": "piscina3.jpg",
            "alt": "Piscina",
            "description": "Piscina moderna en una increíble casa de campo"
          },
          {
            "src": "piscina4.jpg",
            "alt": "Piscina",
            "description": "Genial piscina con jacuzzi, terraza y hermosas plantas"
          }
        ]
      },
  
      // ESTADIO
      {
        "name": "ESTADIO",
        "images": [
          {
            "src": "imagen2.jpg",
            "alt": "Estadio",
            "description": "Estadio el Campín Bogotá"
          },
          {
            "src": "estadio1.jpg",
            "alt": "Estadio",
            "description": "Estadio Khalifa"
          },
          {
            "src": "estadio2.jpg",
            "alt": "Estadio",
            "description": "Estadio turco que tiene forma de cocodrilo"
          },
          {
            "src": "estadio3.jpg",
            "alt": "Estadio",
            "description": "El estadio de Hangzhou que se inspiró en la flor de loto"
          },
          {
            "src": "estadio4.jpg",
            "alt": "Estadio",
            "description": "El estadio Olímpico Luzhniki de Moscú"
          }
        ]
      },
  
      // MIRADOR
      {
        "name": "MIRADOR",
        "images": [
          {
            "src": "imagen3.jpg",
            "alt": "Mirador",
            "description": "Mirador"
          },
          {
            "src": "Mirador1.jpg",
            "alt": "Mirador",
            "description": "Mirador de Monserrate"
          },
          {
            "src": "Mirador2.jpg",
            "alt": "Mirador",
            "description": "Piedra del Peñol"
          },
          {
            "src": "Mirador3.jpeg",
            "alt": "Mirador",
            "description": "Mirador Cerro del Santísimo"
          },
          {
            "src": "Mirador4.jpg",
            "alt": "Mirador",
            "description": "Mirador río de Janeiro Brasil"
          }
        ]
      },
  
      // ATARDECERES
      {
        "name": "ATARDECERES",
        "images": [
          {
            "src": "imagen4.jpg",
            "alt": "Atardecer",
            "description": "Atardecer ETITC"
          },
          {
            "src": "atardecer1.jpg",
            "alt": "Atardecer",
            "description": "Atardecer Parque Nacional de Masai Mara"
          },
          {
            "src": "atardecer2.jpg",
            "alt": "Atardecer",
            "description": "Atardecer en Cartagena de Indias desde La Popa"
          },
          {
            "src": "atardecer3.jpg",
            "alt": "Atardecer",
            "description": "Atardecer Boavitano"
          },
          {
            "src": "atardecer4.jpg",
            "alt": "Atardecer",
            "description": "Atardecer en Salitre Mágico Bogotá"
          }
        ]
      },
  
      // CATEDRALES
      {
        "name": "CATEDRALES",
        "images": [
          {
            "src": "imagen5.jpg",
            "alt": "Catedral",
            "description": "Catedral de Boavita Boyacá"
          },
          {
            "src": "catedral1.jpg",
            "alt": "Catedral",
            "description": "Santuario de Las Lajas (Ipiales, Nariño)"
          },
          {
            "src": "catedral2.jpg",
            "alt": "Catedral",
            "description": "Catedral Basílica Metropolitana Nuestra Señora del Rosario de Manizales"
          },
          {
            "src": "catedral3.jpg",
            "alt": "Catedral",
            "description": "Catedral la Ermita"
          },
          {
            "src": "catedral4.jpg",
            "alt": "Catedral",
            "description": "Basílica de Nuestra Señora de Chiquinquirá de Bogotá"
          }
        ]
      }
    ]
  };
  
  // Función para crear el slider
  function createSlider() {
    const sliderContainer = document.querySelector('.ctr-accordion');
    data.categories.forEach(category => {
      category.images.forEach(image => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.setAttribute('data-category', category.name);
  
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
  
        const span = document.createElement('span');
        span.classList.add('Lugares');
        span.textContent = image.description;
  
        tab.appendChild(img);
        tab.appendChild(span);
        sliderContainer.appendChild(tab);
      });
    });
  }
  
  // Llama a la función para crear el slider
  createSlider();
  
  // Script para filtrar las imágenes
  document.getElementById('filtro').addEventListener('change', function() {
    const selectedCategory = this.value;
    const tabs = document.querySelectorAll('.tab');
  
    tabs.forEach(tab => {
      if (selectedCategory === 'all' || tab.getAttribute('data-category') === selectedCategory) {
        tab.style.display = 'block'; // Mostrar la imagen
      } else {
        tab.style.display = 'none'; // Ocultar la imagen
      }
    });
  });
  