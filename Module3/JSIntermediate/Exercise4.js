//camelCase Version
function camelCaseMap(cssProp) {
    return cssProp
        .split("-")
        .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join("");
}

// camelCase Version 2
function camelCaseFor(cssProp) {
    let parts = cssProp.split("-");
    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {
        let word = parts[i];
        result += word[0].toUpperCase() + word.slice(1);
    }
    return result;
}

//camelCase Version 3
function camelCaseForConditional(cssProp) {
    let parts = cssProp.split("-");
    let result = "";

    for (let i = 0; i < parts.length; i++) {
        result += i === 0 ? parts[i] : parts[i][0].toUpperCase() + parts[i].slice(1);
    }

    return result;
}

//camelCase Version 4
function camelCaseForOf(cssProp) {
    let parts = cssProp.split("-");
    let result = "";
    let index = 0;

    for (const part of parts) {
        result += index === 0 ? part : part[0].toUpperCase() + part.slice(1);
        index++;
    }

    return result;
}
// Testing

const testProps = ["margin-left", "background-image", "display"];

console.log("--- camelCaseMap ---");
testProps.forEach((prop) => console.log(`${prop} -> ${camelCaseMap(prop)}`));

console.log("--- camelCaseFor ---");
testProps.forEach((prop) => console.log(`${prop} -> ${camelCaseFor(prop)}`));

console.log("--- camelCaseForConditional ---");
testProps.forEach((prop) => console.log(`${prop} -> ${camelCaseForConditional(prop)}`));

console.log("--- camelCaseForOf ---");
testProps.forEach((prop) => console.log(`${prop} -> ${camelCaseForOf(prop)}`));
