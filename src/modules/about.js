// module to display the home page
export function displayAbout(){
    const aboutBox = document.createElement('div');
    
    const aboutContent =
    `
    <div class="about-content">
        <div class="banner"></div>
        <h1>About</h1>
        <p>Our company was founded in 2010 by a group of passionate individuals who wanted to bring the best food to their customers.</p>

        <h3>Contact Us</h3>
        <ul>    
            <li>📍 Adresse : 123 New York USA.</li>
            <li>📞 Téléphone : 1234567.</li>
            <li>📧 Email : abcd@dev-foods.com.</li>
            <li>📱 Réseaux sociaux : Facebook, Instagram, Twitter.</li>
        </ul>
    </div>
    `;

    return aboutBox.innerHTML = aboutContent;
}