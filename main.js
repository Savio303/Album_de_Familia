var images = [
    "https://i.postimg.cc/MGn9GJXw/family.jpg",
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg",
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];
    

var names = [
    "Álbum de Família", "Rodrigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"
];

var i = 0;
function update()
{
i++;
var numbers_Of_Family_Member_InArray = 5
if(i > numbers_Of_Family_Member_InArray)
{
i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("Family_Member_Image").src = updatedImage;
document.getElementById("Family_Member_Name").innerHTML = updatedName;
}