import Figure from "./Figure.js";
import Rectangle from "./Rectangle.js";
export default

class Square extends Rectangle{
    constructor(name,size){
        super(name);
        this.size = size;
    }

    get area(){
        return (this.size * this.size).toFixed(2);
    }

    get circumference(){
        return (this.size * 2).toFixed(2);
    }

    get htmlString(){
        let htmlString = `<div class="figure rectangle" style="width: ${this.size}px; height: ${this.size}px;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <h3>${this.name}</h3>
          <dl>
      
            <dt>Size</dt>
            <dd>${this.size} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>`;
        return document.getElementById('results').insertAdjacentHTML("beforeend", htmlString);
    }
}