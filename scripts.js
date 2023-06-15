// Получаем ссылку на элемент выбора языка
const languageSelect = document.getElementById('language-select');

// Слушаем событие изменения выбранного элемента
languageSelect.addEventListener('change', function() {
  // Получаем значение выбранного элемента
  const selectedValue = languageSelect.value;
  
  // Перенаправляем пользователя на страницу с выбранным языком
  window.location.href = window.location.href + '?lang=' + selectedValue;
});