import { useState } from 'react'
import logo from '/img/logo.png'
import elso from '/img/elso.jpg'

function Felvettek() {
  

  return (
    <>
     <div>
        <div>
            <h1>Központi Felvételi Tájékoztató</h1>
            <p></p>
          <a href="https://www.oktatas.hu/"> <img class="logo" src={logo} alt="" sizes="100%" srcset="" /></a>  
        </div>


      <div>
        <h1>Tájékoztatás</h1>
        <h2>Jószakma Szakgimnázium</h2>
        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból <br />
          írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. <br />
          A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján <br />
          számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák.<br />
           A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.<br />



</p>
            <img class="elso" src={elso} alt="" sizes="100%" srcset="" />

      </div>

     </div>

     <h2>A Felvettek rangsora, nyelvi előkészítő. A maximálisan felvehető tanulók száma 32 fő.</h2>

   <p>A választott ágazat: Elektronika</p>




<table>
  <tr>
    <th>Tanuló neve</th>
    <th>Ágazat</th>
    <th>Összes pontszám</th>
  </tr>
  <tr>
    <td>Szekeres Milán</td>
    <td>Elektronika</td>
    <td>280 pont</td>
  </tr>
  <tr>
    <td>Szilágyi Zsuzsanna</td>
    <td>Elektronika</td>
    <td>276 pont</td>
  </tr>
  <tr>
    <td>Balogh Marcell</td>
    <td>Elektronika</td>
    <td>278 pont</td>
  </tr>
 
</table>
        
    </>
  )
}

export default Felvettek