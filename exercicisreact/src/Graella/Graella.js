import "./Graella.css";
function Graella() {
  return (
    <>
      <h1>GRAELLA</h1>
      <div id="menu">
        <img
          src="foto1.jpg"
          alt="1. Bebé monstruo."
          name="fotos1"
          onclick="mifoto(1)"
        />
        <img
          src="foto2.jpg"
          alt="2. Baby Yoda."
          name="fotos2"
          onclick="mifoto(2)"
        />
        <img
          src="foto3.jpg"
          alt="3. Chuky."
          name="fotos3"
          onclick="mifoto(3)"
        />
        <img
          src="foto4.jpg"
          alt="4. Maléfica."
          name="fotos4"
          onclick="mifoto(4)"
        />
        <img src="foto5.jpg" alt="5. Goku." name="fotos5" onclick="mifoto(5)" />
        <img
          src="foto6.jpg"
          alt="6. SuperMario."
          name="fotos6"
          onclick="mifoto(6)"
        />
        <img
          src="foto7.jpg"
          alt="7. Calabacita."
          name="fotos7"
          onclick="mifoto(7)"
        />
        <img
          src="foto8.jpg"
          alt="8. Superheroes."
          name="fotos8"
          onclick="mifoto(8)"
        />
      </div>
      <div id="principal">
        <div id="visor">
          <img src="foto1.jpg" alt="1. Bebé monstruo." name="fotoVisor" />
          <div id="titulo">1.Bebé monstruo.</div>
        </div>
      </div>
    </>
  );
}

export default Graella;
