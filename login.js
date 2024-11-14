const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    let flagError = false;
    document.querySelectorAll('input').forEach((element) => {
        if (element.value == '') {
            flagError = true;
        }
    });
    if (flagError === true) {
        appendAlert('Error, you did not fill in all fields', 'danger');
    }
    else {
        appendAlert('Great, you are logged in to your account!', 'success')
    }
  })
}