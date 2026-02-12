import myImage from '../assets/pressbild_NBP.jpeg';


export default function About() {

  return (

    <div className="about">
      <img src={myImage} alt="My Example" />
      <h2>My CV</h2>

      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Location</th>
            <th>Opera</th>
            <th>Role</th>
            <th>Conductor</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td>Vadstena-Akademien</td>
            <td>Breaking the Waves</td>
            <td>Young Sailor</td>
            <td>David Björkman</td>
            <td>Ylva Kihlberg</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Folkoperan (SKH Opera)</td>
            <td>Dido och Aeneas</td>
            <td>Sailor</td>
            <td>Henrik Schaefer</td>
            <td>Stina Ancker</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Konserthuset</td>
            <td>Gustaf Wasa (konsertant)</td>
            <td>Sten Stures Skugga</td>
            <td>Tobias Ringborg</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Opera på Österbybruk</td>
            <td>Dido och Aeneas</td>
            <td>Sailor</td>
            <td>Niklas Tamm</td>
            <td>Susanna Reuter</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>Wermland Opera (SKH Opera)</td>
            <td>Le donne curiose</td>
            <td>Florindo</td>
            <td>Andreas Hanson</td>
            <td>Stina Ancker</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>Skånska Operan</td>
            <td>Lucia di Lammermoor</td>
            <td>Arturo</td>
            <td>Albert van Pham</td>
            <td>Ola Hörling</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>Folkoperan</td>
            <td>Trollflöjten</td>
            <td>1:e Väktare</td>
            <td>Henrik Schaefer</td>
            <td>Stephane Braunschweig</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>Wermland Opera (SKH)</td>
            <td>Kärlekens förbannelse</td>
            <td>Duca, Rodolfo, Romèo</td>
            <td>Andreas Hanson</td>
            <td>Patrik Sörling</td>
          </tr>
          <tr>
            <td>2026</td>
            <td>Norrlandsoperan</td>
            <td>Tosca</td>
            <td>Spoletta</td>
            <td>Henrik Schaefer</td>
            <td>Eirik Stubø</td>
          </tr>
        </tbody>
      </table>

    </div>




  );




}



