import Figure from "./Figure.js";
export default

class Circle extends Figure{
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get area(){
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }

    get circumference(){
        return (2 * Math.PI * this.radius).toFixed(2);
    }

    get htmlString(){
        const htmlString = `<div class="figure circle" style="width: ${this.diameter}px; height: ${this.diameter}px;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <h3>${this.name}</h3>
          <dl>
            <dt>Radius</dt>
            <dd>${this.radius} px</dd>
      
            <dt>Diameter</dt>
            <dd>${this.diameter} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>`
        return document.getElementById('results').insertAdjacentHTML("beforeend", htmlString);
        
    }
}