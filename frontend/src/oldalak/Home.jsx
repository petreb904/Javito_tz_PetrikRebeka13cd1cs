import { useState } from 'react'
import elso from '/img/elso.jpg'
import logo from '/img/logo.png'
function Home() {
  

  return (
    <>
     <div class="nagy-div">
        <h1>Home.jsx </h1>

        <div class="elso-div">
            <h1>Központi Felvételi Tájékoztató</h1>
            <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból <br />
          írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. <br />
          A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján <br />
          számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák.<br />
           A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.<br />
</p>
           <a href="https://www.oktatas.hu/"><h2>Tájékoztatói oldal</h2></a> 
            <img class="logo" src={logo} alt="" sizes="100%" srcset="" />
        </div>

        <div class="masodik-div">
            <h1>Tájékoztatás</h1>
            <h2>Jószakma Szakgimnázium</h2>
            <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból <br />
          írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. <br />
          A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján <br />
          számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák.<br />
           A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.<br />
</p>
            <h2>Tájékoztatói oldal</h2>
            <img class="elso" src={elso} alt="" sizes="100%" srcset="" />
        </div>

        <div class="harmadik-div">
            <h1>Az oldal használatáról</h1>
            <h2>Jószakma Szakgimnázium</h2>
            <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból <br />
          írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. <br />
          A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján <br />
          számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák.<br />
           A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.<br />
</p>
            <h2>Tájékoztatói oldal</h2>
            <img src="" alt="" sizes="" srcset="" />
        </div>       
     </div>


    <h2>Felvételt nyert tanulók névsora a nyelvi előkészítőre</h2>

    <p>Válassza ki </p>

    <div class="custom-select" style="width:200px;">
  <select>
    <option value="0">szakma neve</option>
    <option value="1">szakma neve</option>
    <option value="2">szakma neve</option>
    </select>
    </div>      
    </>
  )
}

export default Home