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

export default function Home() {
    return (
        <div className="text-center">
            <img className="homeImg" src="/images/slide1.jpg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="m-b-20">
                            <strong>
                                Добре дошли в <br /> CarConnect
                            </strong>
                        </h1>
                        <p class="m-b-40">
                            Добре дошли в CarConnect, мястото на което ще намерите вашия автомобил.
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}