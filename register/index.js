 let selectedModel = null;

 document.querySelectorAll('.model').forEach(model => {
    model.addEventListener('click', () => {
      document.querySelectorAll('.model').forEach(m => m.classList.remove('selected'));
      model.classList.add('selected');
      selectedModel = model.dataset.model;
      document.getElementById('modele').value = selectedModel;
    });
  });

  document.getElementById('eventForm').addEventListener('submit', e => {
    e.preventDefault();

    if (!selectedModel) {
      alert("Veuillez choisir un modèle.");
      return;
    }

    const requiredFields = [...document.querySelectorAll('.checkbox-group input:checked')]
      .map(c => c.value);

    const data = {
      nom: nom.value,
      evenement: evenement.value,
      adresse: adresse.value,
      jour: jour.value,
      modele: selectedModel,
      bouton: btnName.value,
      champsReservation: requiredFields
    };

    console.log("Données envoyées :", data);
    alert("Formulaire validé ✅ (voir console)");
  });





photo_select = document.getElementById("photo_select");
let get_photo_select

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}


photo_select.addEventListener("change", function () {
  fileToBase64(photo_select.files[0]).then(base64 => {
   get_photo_select = base64
    // console.log(base64);
  });
  
})








