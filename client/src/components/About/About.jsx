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
export default function About() {
    return (
        <div className="about-section-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <img src="images/about-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                        <div className="inner-column">
                            <h1>
                                Добре дошли в <span>CarConnect</span>
                            </h1>
                            <h4>Малка История</h4>
                            <p>
                            Добре дошли в CarConnect, вашият партньор в света на наемането на коли! Разбираме, че процесът на наемане на автомобил може да бъде изтощителен и стресиращ, особено за тези, които се сблъскват със социални предизвикателства или просто се нуждаят от удобен начин за придвижване. Затова ние създадохме CarConnect - безопасен и удобен онлайн портал, където можете да наемете автомобил с лекота и увереност.                            </p>
                            <p>
                            Нашето отзивчиво и професионално обслужващо лице е тук, за да направи вашият опит с наемане на автомобил приятен и безпроблемен. Независимо дали сте изправени пред социални предизвикателства, временни затруднения или просто търсите удобен начин за пътуване, ние сме тук, за да ви помогнем. В CarConnect се стремим да осигурим гостоприемно място, където всеки може да наеме автомобил с увереност и комфорт.                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}