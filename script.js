function nav() {
    const ovlay = document.getElementById('ovl');
    const navdata = document.getElementById('navdata');
    
    // Toggle visibility classes
    ovlay.classList.toggle('ovlshow');
    navdata.classList.toggle('navdatashow');

    // Check if navdatashow class is applied
    if (navdata.classList.contains('navdatashow')) {
        // Calculate and set height
        const height = navdata.scrollHeight + 9 + 'px';
        navdata.style.height = height;
    } else {
        // Reset height when class is removed
        navdata.style.height = '0';
    }
}