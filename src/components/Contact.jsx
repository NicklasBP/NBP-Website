import nbpimg from '../assets/nbpportrait.jpg';

export default function Contact() {

    return (
        <div className="contact">
            <img src={nbpimg} alt="Portrait of Nicklas BP"/>
            <p>Telephone: +46 - 73 594 24 07 <br /> Email: <a href="mailto:nicklas.bjarnhallprytz@gmail.com">nicklas.bjarnhallprytz@gmail.com</a></p>
        </div>
    );

}