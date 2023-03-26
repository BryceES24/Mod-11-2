var listItems = document.querySelectorAll ('li');           //All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                      // Counter variable
for (i=0; i < listItems.length; i++) {                      // Loop through elements
    listItems[i].className = 'cool';                        // Change class to cool

}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');               // h2 element
var headingText = heading.firstChild.nodeValue;           // h2 text
var totalItems = listItems.length;                        //No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>';//Content
heading.textContent = newHeading;                         // Update h2