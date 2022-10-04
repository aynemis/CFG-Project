// Those are strings of names, titles, surnames needs to be added
let female_names =
  "Amanda Beatrice Catherine Daphne Edwina Frances Grace Harriet Imogen Jemima Katherine Lucy Margaret Nancy Olivia Poppy Quintana Rosemary Sarah Tracy Ursula Victoria Willa Xanthe Yseult Zara";
let male_names =
  "Albert Benjamin Charles David Edward Francis Giles Henry Inigo Jonathan Kenneth Lionel Miles Nathaniel Oliver Patrick Quentin Rupert Sebastian Thomas Unwin Vere William Xerxes Youngblood Zach";
let female_titles = "Lady Baroness";
let male_titles = "Sir Baron";

// Those are lists made out of strings above

let female_list = female_names.split(" ");
let male_list = male_names.split(" ");
let female_titles_list = female_titles.split(" ");
let male_titles_list = male_titles.split(" ");


console.log(document.querySelector('input[name="gender"]:checked').value);
// // console.log(document.getElementById("generator").submit());
// var gender = document.getElementsByName('gender');
// var aristocrat = document.getElementsByName('aristocrat');

function namegenerator(aristocrat, gender) {
  var female_list_number = Math.round(Math.random() * (female_list.length - 1));
  var male_list_number = Math.round(Math.random() * (male_list.length - 1));
  var femtitles_list_number = Math.round(
    Math.random() * (female_titles_list.length - 1)
  );
  var maletitles_list_number = Math.round(
    Math.random() * (male_titles_list.length - 1)
  );
  if (aristocrat == true) {
    if (gender == "Female") {
      let goodname =
        female_titles_list[femtitles_list_number] +
        " " +
        female_list[female_list_number];
      return goodname;
    } else if (gender == "Male") {
      let goodname =
        male_titles_list[maletitles_list_number] +
        " " +
        male_list[male_list_number];
      return goodname;
    } else {
      let genders = ["Female", "Male"];
      let random_gender = genders[Math.round(Math.random())];
      if (random_gender == "Female") {
        let goodname =
          female_titles_list[femtitles_list_number] +
          " " +
          female_list[female_list_number];
        return goodname;
      } else {
        let goodname =
          male_titles_list[maletitles_list_number] +
          " " +
          male_list[male_list_number];
        return goodname;
      }
    }
  } 
  else {
    if (gender == "Female") {
      let goodname = female_list[female_list_number];
      return goodname;
    } else if (gender == "Male") {
      let goodname = male_list[male_list_number];
      return goodname;
    } else {
      let genders = ["Female", "Male"];
      let random_gender = genders[Math.round(Math.random())];
      if (random_gender == "Female") {
        let goodname = female_list[female_list_number];
        return goodname;
      } else {
        let goodname =  male_list[male_list_number];
        return goodname;
      }
    }
  }
}

// for (i=0; i<11; i++){
//   console.log(namegenerator(true, "Female"));
//   console.log(namegenerator(false, "Male"));
// }