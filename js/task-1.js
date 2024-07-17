function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const slug = lowerCaseTitle.replace(/ /g, '-');
  
  return slug;
}

console.log(slugify("Hello World")); 
console.log(slugify("My Article Title")); 
console.log(slugify("  Leading and trailing spaces  "));
console.log(slugify("Another   Example with multiple spaces")); 
