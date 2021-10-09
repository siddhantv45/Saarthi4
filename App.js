import React from 'react';

function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

const App = () => {
  return (    
    // <div class="mb-3">
    //   <input type="file" class="form-control" aria-label="file example" required />
    // </div>
    <>
      <input type="file" onChange={previewFile}/>
      <img src="" height="200" alt="Image preview..."></img>
    </>
  );
}

export default App;
