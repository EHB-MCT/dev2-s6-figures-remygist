import Figure from "./Figure.js";
export default

class Rectangle extends Figure{
    constructor(name,width,height){
        super(name);
        this.width = width;
        this.height = height;
    }

    get area(){
        return (this.width * this.height).toFixed(2);
    }

    get circumference(){
        return ((this.width + this.height) * 2).toFixed(2);
    }

    get htmlString(){
        return document.getElementById('results').innerHTML = 
        `<div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
         <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.height} px</dd>
      
            <dt>Width</dt>
            <dd>${this.width} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
         </div>`;
    }
}