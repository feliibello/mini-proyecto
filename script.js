const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'XXX',
      'X-RapidAPI-Host': 'YYY'
    }
  }

  const fetchIpInfo = ip => {
    return fetch(`https://freeipapi.com/api/json/${ip}`, OPTIONS)
      .then(res => res.json())
      .catch(err => console.error(err))
  }

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if(!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')

})