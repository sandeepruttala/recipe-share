const imageInput = document.getElementById("image-input");
      const imagePreview = document.getElementById("image-preview");

      imageInput.addEventListener("change", function () {
        const selectedFile = imageInput.files[0];
        if (selectedFile) {
          const objectURL = URL.createObjectURL(selectedFile);
          imagePreview.src = objectURL;
          imagePreview.style.display = "block";
        } else {
          imagePreview.src = "#";
          imagePreview.style.display = "none";
        }
      });