
let search_list=['Affenpinscher','Afghan Hound', 'Airedale Terrier', 'Akbash', 'Akita', 'Alaskan Klee Kai', 'Alaskan Malamute', 'American Bulldog'];
let search_list1=['Affenpinscher','AfghanHound', 'AiredaleTerrier', 'Akbash', 'Akita', 'AlaskanKleeKai', 'AlaskanMalamute', 'AmericanBulldog'];

function search(){
    let val=document.getElementById("searching").value;
    if(val==search_list[0] || val==search_list1[0]){
        document.getElementById('search').href="#first_dog";
        document.getElementById('first_dog').style="background-color:grey"
    }

   else if(val==search_list[1] || val==search_list1[1]){
    document.getElementById('first_dog').style="background-color:white"
        document.getElementById('search').href="#second_dog";
        document.getElementById('second_dog').style="background-color:grey"
    }

    else if(val==search_list[2] || val==search_list1[2]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"

        document.getElementById('search').href="#third_dog";
        document.getElementById('third_dog').style="background-color:grey"
    }

    else if(val==search_list[3] || val==search_list1[3]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"


        document.getElementById('search').href="#fourth_dog";
        document.getElementById('fourth_dog').style="background-color:grey"
    }

    else if(val==search_list[4] || val==search_list1[4]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"
    document.getElementById('fourth_dog').style="background-color:white"


        document.getElementById('search').href="#fifth_dog";
        document.getElementById('fifth_dog').style="background-color:grey"

    }

    else if(val==search_list[5] || val==search_list1[5]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"
    document.getElementById('fourth_dog').style="background-color:white"
    document.getElementById('fifth_dog').style="background-color:white"


        document.getElementById('search').href="#sixth_dog";
        document.getElementById('sixth_dog').style="background-color:grey"
        
    }

    else if(val==search_list[6] || val==search_list1[6]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"
    document.getElementById('fourth_dog').style="background-color:white"
    document.getElementById('fifth_dog').style="background-color:white"
    document.getElementById('sixth_dog').style="background-color:white"


        document.getElementById('search').href="#seventh_dog";
        document.getElementById('seventh_dog').style="background-color:grey"
        
    }

    else if(val==search_list[7] || val==search_list1[7]){
    document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"
    document.getElementById('fourth_dog').style="background-color:white"
    document.getElementById('fifth_dog').style="background-color:white"
    document.getElementById('sixth_dog').style="background-color:white"
    document.getElementById('seventh_dog').style="background-color:white"



        document.getElementById('search').href="#eighth_dog";
        document.getElementById('eighth_dog').style="background-color:grey"
        
    }

    else{
        alert('breed not matched please enter valid breed');
        document.getElementById('first_dog').style="background-color:white"
    document.getElementById('second_dog').style="background-color:white"
    document.getElementById('third_dog').style="background-color:white"
    document.getElementById('fourth_dog').style="background-color:white"
    document.getElementById('fifth_dog').style="background-color:white"
    document.getElementById('sixth_dog').style="background-color:white"
    document.getElementById('seventh_dog').style="background-color:white"
    document.getElementById('eight_dog').style="background-color:white"


    }
}

let myImagesArray = [
'../assets/images/dog_breeds/breed1.jpg',
'../assets/images/dog_breeds/breed2.jpg',
'../assets/images/dog_breeds/breed3.jpg',
'../assets/images/dog_breeds/breed4.jpg',




];


let ImageNumber = 0;
let difference = myImagesArray.length - 1;

let delay = 2000;

setInterval('ChangeImages(1)', delay);


function ChangeImages(direction) {


ImageNumber = ImageNumber + direction;

if (ImageNumber > difference) {

ImageNumber = 0;
} 

if (ImageNumber < 0) {

ImageNumber = difference;
} 
document.getElementById('slideshow').src = myImagesArray[ImageNumber];
}


