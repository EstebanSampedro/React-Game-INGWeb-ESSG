
import headerYellow from '../assets/flyer/headerYellow.png'
import headerBlue from '../assets/flyer/headerBlue.png'
import headerGreen from '../assets/flyer/headerGreen.png'
import headerBrown from '../assets/flyer/headerBrown.png'
import headerGrey from '../assets/flyer/headerGrey.png'
import bodyYellow from '../assets/flyer/bodyYellow.png'
import bodyBlue from '../assets/flyer/bodyBlue.png'
import bodyGreen from '../assets/flyer/bodyGreen.png'
import bodyBrown from '../assets/flyer/bodyBrown.png'
import bodyGrey from '../assets/flyer/bodyGrey.png'

// Plantillas de información de desechos
export const Flyers = [
    {
        header: headerYellow,
        body: bodyYellow,
        style: 'flyer-yellow'
    },
    {
        header: headerBlue,
        body: bodyBlue,
        style: 'flyer-blue'
    },
    {
        header: headerGreen,
        body: bodyGreen,
        style: 'flyer-green'
    },
    {
        header: headerGrey,
        body: bodyGrey,
        text: `Productos higiénicos, pañales, platos rotos, ropa`,
        style: 'flyer-grey'
    },
    {
        header: headerBrown,
        body: bodyBrown,
        style: 'flyer-brown'
    },

]

export default { Flyers }