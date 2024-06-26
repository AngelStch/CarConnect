import "../../../public/css/animate.css"
import "../../../public/css/baguetteBox.min.css"
import "../../../public/css/bootstrap.min.css"
import "../../../public/css/style.css"
import "../../../public/css/responsive.css"
import "../../../public/css/superslides.css"
import "../../../public/css/font-awesome.min.css"
import "../../../public/css/classic.time.css"
import "../../../public/css/classic.date.css"
import "../../../public/css/classic.css"

export default function Footer() {
  return (
    <footer className="footer-area bg-f">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>За нас</h3>
            <p>В CarConnect се стремим да осигурим гостоприемно място, където всеки може да наеме автомобил с увереност и комфорт. </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Работно време</h3>
            <p>
              <span className="text-color">Понеделник: </span>Затворено
            </p>
            <p>
              <span className="text-color">Вт-Ср :</span> 9:00 - 22:00 часа
            </p>
            <p>
              <span className="text-color">Чт-Пт :</span> 9:00 - 22:00 часа
            </p>
            <p>
              <span className="text-color">Сб-Нд :</span> 17:00 - 22:00 часа
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Контактна информация</h3>
            <p className="lead">Благоевград, ул. Аргир Манасиев 8А, 2700</p>
            <p className="lead">
              <a href="#">+359 888 888 888</a>
            </p>
            <p>
              <a href="#"> adstoichev@gmail.com</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">

            <ul className="list-inline f-social">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}