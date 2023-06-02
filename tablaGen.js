  class Pixel {
    #id;
    constructor(szuloElem, id) {
      this.#id = id;
      this.szuloElem = szuloElem.append(`<div id="${this.#id}" class="kocka"></div>`);
      this.elem = $(`#${this.#id}:last-child`);
      this.aktszin = "red";
      this.ballLenyomva = false;
      //this.huzasTrigger();
      this.elem.on("click", () => {
        console.log(this.aktszin);
        this.kattintasTrigger();
      });
      $(document).on("mousedown", function () {
        this.ballLenyomva = true;
      });

      this.elem.on("mousemove", function () {
        if (self.ballLenyomva == true) {
          //this.elem.css("background-color", "red");

          this.huzasTrigger();
        }
      });

      $(document).on("mouseup", function () {
        this.ballLenyomva = false;
      });

    }

    kattintasTrigger() {
      const esemeny = new CustomEvent("szinBeallit", { detail: this });
      window.dispatchEvent(esemeny);
    }

    setSzin(szin) {
      this.aktszin = szin;
      this.elem.css("background-color", this.aktszin);
    }

    huzasTrigger() {
      

    /* let self = this;
      $(document).on("mousedown", function () {
        self.ballLenyomva = true;
      });

      this.elem.on("mousemove", function () {
        if (self.ballLenyomva == true) {
          self.elem.css("background-color", "red");
        }
      });

      $(document).on("mouseup", function () {
        self.ballLenyomva = false;
      });*/
      const esemeny = new CustomEvent("huzasBeallit", { detail: this });
      window.dispatchEvent(esemeny);
    }
  }

  export default Pixel;
