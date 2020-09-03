const electron = require('electron');
const {BrowserWindow} = require('electron').remote;



class ShowDimensions extends HTMLElement {
    connectedCallback() {
        this.render();
        this.addEventListener("click", () => {
            //ipcRenderer.send("resize", window.innerWidth, 100);
            //console.log("clicked!");
            var window = BrowserWindow.getFocusedWindow();
            window.close();
        });
        window.addEventListener("resize", this.render.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener("resize", this.render);
    }

    get dimensions() {
        return `${window.innerWidth}x${(window.innerHeight - 30)}`;
    }

    render() {
        this.innerHTML = this.dimensions;
        document.title = this.dimensions;
    }
}

window.customElements.define("show-dimensions", ShowDimensions);