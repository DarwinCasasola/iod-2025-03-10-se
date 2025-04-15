function ucFirstLetters(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Test the function
console.log(ucFirstLetters("las Vegas"));
console.log(ucFirstLetters("new york city"));
console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("london"));
console.log(ucFirstLetters("sydney"));
console.log(ucFirstLetters("mexico city"));
