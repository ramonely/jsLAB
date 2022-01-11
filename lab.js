function Room() 
{

    let length = prompt("Please input a length");
    let width = prompt("Please input a width");
    let area = length * width;
    let perimeter = ((2 * length) * (2 * width));

    console.log("Area =", area)

    console.log("Perimeter =",perimeter)
 
    console.log("Carpet Needed =",area/5)

    console.log("Paint Needed =",perimeter/5)

    let answer = prompt("Do you want to know the volume y/n?")

    if (answer.toLowerCase() === "y")
    {
        let height = prompt("Please input a height");
        let volume = length * width * height;
        console.log("Volume =", volume)
    }

    console.log("Press the ROOM button again to check another room")

}

function Student()
{

    let students = [] ;
    students[0] = " ";
    students[1] = "Andy Berr";
    students[2] = "Cassly Sullen";
    students[3] = "Phillip Conrad";
    students[4] = "Zachary Parr";
    students[5] = "Cortez Christian";
    students[6] = "Erin Walter";
    students[7] = "Richard Moss";
    students[8] = "James Mitchell";
    students[9] = "Rick Magdaleno";
    students[10] = "Calyn Greene";

    let homeTown = [];
    homeTown[0] = " ";
    homeTown[1] = "Berkley, MI";
    homeTown[2] = "Detroit, MI";
    homeTown[3] = "Canton, MI";
    homeTown[4] = "Wyandotte, MI";
    homeTown[5] = "Detroit, MI";
    homeTown[6] = "Troy, MI";
    homeTown[7] = "Canton, MI";
    homeTown[8] = "Yap, FSM";
    homeTown[9] = "Gilbert, AZ";
    homeTown[10] = "Portage, MI";

    let favoriteFood = [];
    favoriteFood[0] = " ";
    favoriteFood[1] = "French Fries";
    favoriteFood[2] = "Steak";
    favoriteFood[3] = "Fried Chicken";
    favoriteFood[4] = "Sushi";
    favoriteFood[5] = "Chicken Fettuccine Alfredo";
    favoriteFood[6] = "Tacos";
    favoriteFood[7] = "Sushi";
    favoriteFood[8] = "Katsu";
    favoriteFood[9] = "Hamburger";
    favoriteFood[10] = "Mac and Cheese";

    let location = prompt("Which student do you want to learn about? Enter 1-10 or Enter first and last name: ");

    if(location <= 10 && location != 0)
    {
        console.log("Student", location, "is", students[location]);
        let answer = prompt("What would you like to know about " +students[location]+"? Enter hometown or favorite food:");

        if(answer.toLowerCase() === "hometown" )
        {
            console.log(students[location], "is from", homeTown[location]);

            let more = prompt("Would you like to know more about " +students[location]+ " Enter: y/n");

            if(more.toLowerCase() === "y" )
            {
                console.log(students[location], "favorite food is", favoriteFood[location]);
                console.log("Goodbye!")
            }
            else
            {
                console.log("Goodbye!")
            }

        }

        if (answer.toLowerCase() === "favorite food")
        
        {
            console.log(students[location], "favorite food is", favoriteFood[location]);

            let more2 = prompt("Would you like to know more about " +students[location]+ " Enter: y/n");

            if(more2.toLowerCase() === "y" )
            {
                console.log(students[location], "is from", homeTown[location]);
                console.log("Goodbye!")
            }
            else
            {
                console.log("Goodbye!")
            }
        }

    }

    if (students.some(students => students.toLowerCase() === location.toLowerCase()))
    {
      let spot = students.findIndex(students => students.toLowerCase() === location.toLowerCase());
      
      console.log("Student", spot, "is", students[spot]);
        let answer1 = prompt("What would you like to know about " +students[spot]+"? Enter hometown or favorite food:");

        if(answer1.toLowerCase() === "hometown" )
        {
            console.log(students[spot], "is from", homeTown[spot]);

            let more = prompt("Would you like to know more about " +students[spot]+ " Enter: y/n");

            if(more.toLowerCase() === "y" )
            {
                console.log(students[spot], "favorite food is", favoriteFood[spot]);
                console.log("Goodbye!")
            }
            else
            {
                console.log("Goodbye!")
            }

        }

        if (answer1.toLowerCase() === "favorite food")
        
        {
            console.log(students[spot], "favorite food is", favoriteFood[spot]);

            let more2 = prompt("Would you like to know more about " +students[spot]+ " Enter: y/n");

            if(more2.toLowerCase() === "y" )
            {
                console.log(students[spot], "is from", homeTown[spot]);
                console.log("Goodbye!")
            }
            else
            {
                console.log("Goodbye!")
            }
        }

    }

}