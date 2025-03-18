// module to display the home page
export function displayHome(){
    const homeBox = document.createElement('div');
    
    const homeContent = 
    `
    <div class="home-content">
        <div class="banner"></div>
        <h1>Dev-Foods</h1>
        <p>Découvrez une expérience culinaire inoubliable !</p>
        <button class="btn">Commandez maintenant</button><br>
        <img src="https://burst.shopifycdn.com/photos/games-and-pizza.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="home image" class="home-img">  
    </div>  
    `
    
    //homeBox.appendChild(homeContent);

    return homeBox.innerHTML = homeContent;
}