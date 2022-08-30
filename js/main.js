function change()
{
    var img1 = "images/wetsand.jpg",
        img2 = "images/palmtree.jpg";
    var imgElement = document.getElementById("imageSwap");
    
     imgElement.src = (imgElement.src = img1)? img2 :img1;

}