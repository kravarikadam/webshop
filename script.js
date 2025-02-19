window.onload = function () {
  function loadContent(file, containerId) {
      fetch(file)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Error loading ${file}: ${response.statusText}`);
              }
              return response.text();
          })
          .then(data => {
              document.getElementById(containerId).innerHTML = data;
          })
          .catch(error => console.error(`There was a problem loading ${file}:`, error));
  }

  loadContent('nav.html', 'nav-container');
  loadContent('fooldal.html', 'fooldal-container');
};

  