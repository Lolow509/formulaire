// JS natif simple pour ouvrir/fermer le modal et valider
    const openBtn = document.getElementById('openRsvp');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close');
    const submitBtn = document.getElementById('submit');

    openBtn.addEventListener('click', ()=> modal.classList.add('open'));
    closeBtn.addEventListener('click', ()=> modal.classList.remove('open'));
    modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.remove('open') });

    submitBtn.addEventListener('click', ()=>{
      const nom = document.getElementById('nom').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const prenom = document.getElementById('prenom').value.trim();
      const presence = document.getElementById('presence').value.trim();
      const nb_invite = document.getElementById('nb_invite').value.trim();
      const msg_prive = document.getElementById('msg_prive').value.trim();
      
      if(!nom || !phone ){ alert('Merci de renseigner votre nom et téléphone.'); return; }
      // ici on pourrait envoyer vers un serveur; pour l'exemple on affiche simplement un message
      alert(`Merci ${nom} — votre confirmation a été enregistrée.`);
      modal.classList.remove('open');
      document.getElementById('name').value=''; document.getElementById('phone').value='';
    });
