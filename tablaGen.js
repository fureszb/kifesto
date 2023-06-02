class Pixel {
  #id;
  constructor(szuloElem, id) {
    this.#id = id;
    this.szuloElem = szuloElem.append(`<div id="${this.#id}" class="kocka"></div>`);
    this.elem = $(`#${this.#id}:last-child`);
    this.aktszin = "red";
    !//this.huzasTrigger();
    this.elem.on("click", () => {
    console.log( this.aktszin);
     
      this.kattintasTrigger()
    });
  }
  
  kattintasTrigger() {
    const esemeny=new CustomEvent("szinBeallit", {detail:this})
    window.dispatchEvent(esemeny)
  }
  
  setSzin(szin) {
    this.aktszin = szin;
    this.elem.css("background-color", this.aktszin);
  }
  
  huzasTrigger() {
    let self = this;
    this.elem.on("mousemove", function () {
        self.elem.css("background-color", "red");
    });
  }

}
export default Pixel;
