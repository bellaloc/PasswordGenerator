// Define character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate a random character from a given character set
function getRandomCharacter(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
}

// Function to generate a secure password based on user input
function generatePassword() {
    // Prompt user for password length
    let passwordLength;
    do {
        passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

    // Prompt user for character types to include
    const includeLowercase = confirm("Include lowercase characters?");
    const includeUppercase = confirm("Include uppercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    // Validate that at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("At least one character type must be selected.");
        return;
    }

    // Build the character set based on user choices
    let charSet = "";
    if (includeLowercase) charSet += lowercaseChars;
    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumeric) charSet += numericChars;
    if (includeSpecial) charSet += specialChars;

    // Generate the password
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter(charSet);
    }

    // Display the password
    alert("Your generated password is:\n" + password);
}

// Event listener for the "Generate Password" button
document.getElementById("generate").addEventListener("click", generatePassword);
