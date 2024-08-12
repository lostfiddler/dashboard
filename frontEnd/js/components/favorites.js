class Favorites extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>
                Favorites
            </h1>
            <ul class="media">
                <li>
                    <a href="https://twitch.tv"><img
                        src='images/twitch.svg' width=100></a>
                </li>
                <li>
                    <a href="https://youtube.com"><img
                        src='images/youtube_1.svg' width=100></a>
                </li>
                <li>
                    <a href="https://netflix.com"><img
                        src='images/netflix_white.png'
                        width=100></a>
                </li>
            </ul>
        `;
    }
}

customElements.define('x-favorites', Favorites)
