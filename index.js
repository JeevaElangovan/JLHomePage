// navBar=====>

  // Function to open sidebar 
  function openSidebar() {
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('body').classList.add('sidebar-open');
}

// Function to close sidebar
function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('sidebar-open');
}

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId + '-dropdown');
    var icon = document.getElementById(dropdownId + '-icon');

    // Close all dropdowns except the one being opened
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function (d) {
        if (d.id !== dropdownId + '-dropdown' && d.style.display === 'block') {
            d.style.display = 'none';
            var associatedIcon = document.getElementById(d.id.replace('-dropdown', '-icon'));
            associatedIcon.classList.remove('bi-chevron-up');
            associatedIcon.classList.add('bi-chevron-down');
        }
    });

    // Toggle the display and icon class of the current dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    } else {
        dropdown.style.display = 'block';
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    }
}


// Toggle sidebar on navbar toggler click
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    if (document.querySelector('.sidebar').classList.contains('active')) {
        closeSidebar(); // Close sidebar if already open
    } else {
        openSidebar(); // Open sidebar if closed
    }
});



    // Our Services Section 3 ====>

    document.addEventListener("DOMContentLoaded", function () {
        const labels = document.querySelectorAll('.sec3-icon-svg label');
        const sections = document.querySelectorAll('.section3-part2');
        
        function displaySection(index) {
            sections.forEach((section, sectionIndex) => {
                section.style.display = sectionIndex === index ? 'block' : 'none';
            });
            labels.forEach(label => {
                label.classList.remove('active-label');
            });
            labels[index].classList.add('active-label');
        }
        
        labels.forEach((label, index) => {
            label.addEventListener('click', () => {
                displaySection(index);
            });
        });
    
        // Initialize the first label as active if needed
        if (labels.length > 0) {
            labels[0].classList.add('active-label');
            displaySection(0); // Also display the first section
        }
    });
    

    


    
    // Section 3 response Our Services ====>
  
    // document.addEventListener("DOMContentLoaded", function() {
    //     var headers = document.querySelectorAll('.ser-res-sec1');
    //     headers.forEach(function(header) {
    //         var icon1 = header.querySelector('.fas.fa-image');
    //         var icon = header.querySelector('.toggle-icon .icon');
    //         var label = header.querySelector('label'); // Select the label inside the header
    //         var content = header.nextElementSibling;
    
    //         header.addEventListener('click', function() {
    //             if (content.style.display === 'none' || content.style.display === '') {
    //                 content.style.display = 'block';
    //                 icon1.style.backgroundColor = '#2CA068';
    //                 icon1.style.color = '#ffffff';
    //                 label.style.color = '#000000'; 
    //                 label.style.fontWeight = 'bold'; 
    //                 icon.classList.remove('fa-plus');
    //                 icon.classList.add('fa-minus');
    //             } else {
    //                 content.style.display = 'none';
    //                 icon1.style.backgroundColor = '#E9E9E9';
    //                 icon1.style.color = '#ACACAC';
    //                 label.style.fontWeight = '';
    //                 label.style.color = ''; // Reset the label color when inactive
    //                 icon.classList.remove('fa-minus');
    //                 icon.classList.add('fa-plus');
    //             }
    //         });
    //     });
    // });
    
   
    document.addEventListener("DOMContentLoaded", function() {
        var headers = document.querySelectorAll('.ser-res-sec1');
        headers.forEach(function(header) {
            var icon1 = header.querySelector('.toggle-icon.sec3-icon-res');
            var icon = header.querySelector('.toggle-icon.icon');
            var label = header.querySelector('label');
            var content = header.nextElementSibling;
    
            header.addEventListener('click', function() {
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon1.style.backgroundColor = '#2CA068';
                    icon1.style.color = '#ffffff';
                    label.style.color = '#000000'; 
                    label.style.fontWeight = 'bold'; 
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    content.style.display = 'none';
                    icon1.style.backgroundColor = '#E9E9E9';
                    icon1.style.color = '#ACACAC';
                    label.style.fontWeight = '';
                    label.style.color = '';
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    });
    


//  Section - 4 Industry Responsive


var intervalId = setInterval(autoSwitchContent, 4000); 

var currentContentIndex = 1;
var touchStartX = 0;
var touchEndX = 0;

// Touch start event listener
document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
});

// Touch end event listener
document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Function to handle swipe gesture
function handleSwipe() {
    var swipeThreshold = 50; // Adjust as needed
    var deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
        // Swipe right, go to previous content
        currentContentIndex--;
        if (currentContentIndex < 1) {
            currentContentIndex = 8; // Assuming there are 8 contents
        }
        displayContent(currentContentIndex);
    } else if (deltaX < -swipeThreshold) {
        // Swipe left, go to next content
        currentContentIndex++;
        if (currentContentIndex > 8) {
            currentContentIndex = 1;
        }
        displayContent(currentContentIndex);
    }
}

// Rest of your existing code...

// Function to display content
function displayContent(index) {
    // Update current content index
    currentContentIndex = index;

    // Hide all content elements
    var contents = document.querySelectorAll('.industry_session8_para3');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the content with the specified index
    var contentId = 'content' + index;
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }

    // Update button states
    var buttons = document.querySelectorAll('.bottom-buttons button');
    buttons.forEach(function(button, i) {
        button.classList.remove('active');
        if (i === index - 1) {
            button.classList.add('active');
        }
    });

    // Restart the automatic carousel from the selected index
    clearInterval(intervalId);
    intervalId = setInterval(autoSwitchContent, 4000); 
}

// Function to automatically switch content
function autoSwitchContent() {
    // Display next content
    currentContentIndex++;

    // Reset index if it exceeds the total number of contents
    if (currentContentIndex > 8) {
        currentContentIndex = 1;
    }

    displayContent(currentContentIndex);
}

// Trigger the automatic content switching
var intervalId = setInterval(autoSwitchContent, 4000); 



//  Section - 5

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.col p[data-content]');
    const contents = document.querySelectorAll('.hidden-content .content');

    function hideAllContents() {
        contents.forEach(content => {
            content.classList.remove('visible');
        });
    }

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            deactivateAllTabs();
            hideAllContents();
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('visible');
            this.classList.add('active-tab');
        });
    });
});

    
// section -5 - responsive

document.addEventListener("DOMContentLoaded", function() {
    // Get all headings inside section5-part-1
    const headings = document.querySelectorAll(".section5-part-1 .col p");
    
    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {

            const contentId = this.getAttribute("data-content");
            
            document.querySelectorAll('.content').forEach(function(content) {
                content.style.display = "none";
            });
            
            const content = document.getElementById(contentId);
            content.style.display = "block";
        });
    });

    const frontendHeading = document.querySelector(".section5-part-1 .col p[data-content='frontend-content']");
    frontendHeading.click();
});

document.addEventListener("DOMContentLoaded", function() {

    const headingElements = document.querySelectorAll(".section5-part-1 .col p.heading-text");
    

    headingElements.forEach(function(headingElement) {
        headingElement.addEventListener("click", function() {

            headingElements.forEach(function(element) {
                if (element !== headingElement) {
                    // Change button to text
                    element.classList.remove("heading-button");
                    element.classList.add("heading-text");
                }
            });

            const contentId = this.getAttribute("data-content");
            
            // Hide all content sections
            document.querySelectorAll('.content').forEach(function(content) {
                content.style.display = "none";
            });
            
            const content = document.getElementById(contentId);
            content.style.display = "block";
        });
    });

    // Trigger click event on the heading element
    const frontendHeadingElement = document.querySelector(".section5-part-1 .col p.heading-text[data-content='frontend-content']");
    frontendHeadingElement.click();
});




// ---Section - 7 Testimonials --->

document.addEventListener('DOMContentLoaded', function() {
    var testimonials = document.querySelectorAll('.section7-col2');
    var dots = document.querySelectorAll('.sec7-dots-container button');
    var currentIndex = 0; // Keep track of the current slide

    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === currentIndex ? '' : 'none'; // Show current, hide others
        });
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if(index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }



    document.querySelector('.sec7-leftarrow').addEventListener('click', function() {
        currentIndex = currentIndex - 1 < 0 ? testimonials.length - 1 : currentIndex - 1;
        updateTestimonials();
    });

    document.querySelector('.sec7-rightarrow').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonials();
    });

    document.querySelector('.sec7-rightarrow').classList.add('green-arrow');


    // Bind click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateTestimonials();
        });
    });

    // Initial call to display the first testimonial and set the correct active dot
    updateTestimonials();
});


// Form ====>

// Function to validate the form
function validateForm() {
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();

    // Check if first name is empty
    if (firstName === "") {
        alert("Please enter your first name");
        return false;
    }

    // Check if last name is empty
    if (lastName === "") {
        alert("Please enter your last name");
        return false;
    }

    // Check if email is empty
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    // Check if email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // If all validations pass, return true
    return true;
}


//  Footer --->

document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('.footer-column');

    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('h3');
  
        // Find the ul element
        var menu = column.querySelector('.footer-menu');
  
        // Add click event listener to the header
        h3.addEventListener('click', function() {
            // Close all other menus
            footerColumns.forEach(function(otherColumn) {
                if (otherColumn !== column) {
                    otherColumn.querySelector('.footer-menu').classList.remove('active-footer');
                    otherColumn.querySelector('i').classList.remove('bi-chevron-up');
                    otherColumn.querySelector('i').classList.add('bi-chevron-down');
                }
            });

            // Toggle the active class on the menu when the header is clicked
            menu.classList.toggle('active-footer');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
});
