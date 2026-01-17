import Card from './components/card.jsx'
import cardData  from './components/users.jsx'

function App() {
    return (
        <div className="parent">
            {
                cardData.map(function(elem, idx) {

                    return <div id={idx}>
                        
                        <Card name={elem.name} image={elem.image} skill={elem.skills} desc={elem.description} />
                        </div>
                })
            }
        </div>
    )
}

export default App;