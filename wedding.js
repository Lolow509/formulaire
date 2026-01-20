
  const modal = document.getElementById('modal');

  function openASVP(){
    modal.classList.add('open')
  }

  function closeModal(){
    modal.classList.remove('open')
  }


  function submitBtn(){
    alert("Merci pour votre confirmation 💜");
    modal.classList.remove('open');
  }

