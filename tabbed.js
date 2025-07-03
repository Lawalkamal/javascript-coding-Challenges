const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    // Remove active from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Hide all content sections
    tabContents.forEach(content => content.classList.add('hidden'));

    // Add active to clicked button
    button.classList.add('active');

    // Show the related content
    const activeContent = document.getElementById(`${tabId}-content`);
    activeContent.classList.remove('hidden');
  });
});
