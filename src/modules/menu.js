// module to display the menu page
export function displayMenu(){
    const menuBox = document.createElement('div');
    const menuContent = 
    `
    <div class="menu-content">
        <div class="banner"></div>
        <h1>Menu</h1>
        <p>🔹 Catégories de plats :</p>
        <ol>
            <li>Entrées
                <ul>
                    <li>Salade César – Poulet grillé, parmesan, sauce maison.</li>
                    <li>Bruschetta – Tomates fraîches, basilic, huile d’olive.</li>
                    <li>Grilled Chicken Salad – Poulet grillé, parmesan, sauce maison.</li>
                </ul>
            </li>
            <li>Plats principaux
                <ul>
                    <li>Steak frites – Entrecôte grillée avec sauce au poivre.</li>
                    <li>Pasta Carbonara – Spaghettis, lardons, œuf, parmesan.</li>
                </ul>
            </li>
            <li>Desserts
                <ul>
                    <li>Tiramisu – Café, mascarpone, cacao.</li>
                    <li>Fondant au chocolat – Servi avec une boule de glace vanille.</li>
                </ul>
            </li>
            <li>Boissons
                <ul>
                    <li>Cocktails 🍹 – Mojito, Pina Colada, Spritz.</li>
                    <li>Jus frais 🥤 – Orange, mangue, ananas.</li>
                    <li>Cafés & Thés ☕ – Espresso, Cappuccino, Thé vert.</li>
                </ul>
            </li>
        </ol>
    </div>
    `;

    return  menuBox.innerHTML = menuContent;
}