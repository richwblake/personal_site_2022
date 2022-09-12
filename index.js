const body = document.querySelector('body');
const checkbox = document.getElementById('chkbx');

checkbox.addEventListener('change', e => {
    const checked = e.target.checked;

    if (checked)
        body.className = 'dark-mode';
    else
        body.className = 'light-mode';
});
