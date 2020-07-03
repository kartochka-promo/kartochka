export function handleImageUpload(fromId, toId ) {
        let image = document.getElementById(fromId).files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById(toId).src = e.target.result;
        };
        reader.readAsDataURL(image);
}
