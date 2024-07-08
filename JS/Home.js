document.querySelectorAll('.form-check-input').forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });