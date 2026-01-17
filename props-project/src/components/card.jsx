import {Mail} from "lucide-react"
import {Bell} from "lucide-react"

function Card(props) {
    return (
            <div className="child">
                <div className="head">
                    <div className="image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="personalInfo">
                        <h1>{props.name}</h1>
                        <div className="skills">
                            <div className="skil" id="one">{props.skill[0]}</div>
                            <div className="skil" id="two">{props.skill[1]}</div>
                        </div>
                    </div>
                
                </div>
                <div className="center">
                    <p>{props.desc}</p>
                </div>
                <div className="tail">
                    <div className="follow">+Follow</div>
                    <div className="ping mail"><Mail /></div>
                    <div className="ping notify"><Bell /></div>
                </div>
        </div>
    )
}

export default Card;