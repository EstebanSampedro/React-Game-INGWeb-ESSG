//import images
import cardYellow from '../assets/yellow.png'
import cardBlue from '../assets/blue.jpg'
import cardBrown from '../assets/brown.png'
import cardGrey from '../assets/grey.png'
import cardGreen from '../assets/green.png'

//Objeto carta de tachos de basura
export const CARDS = [
    {
        category: 'vidrio',
        image: cardGreen,
    },
    {
        category: 'plastico',
        image: cardYellow,
    },
    {
        category: 'papel',
        image: cardBlue,
    },
    {
        category: 'organico',
        image: cardBrown,
    },
    {
        category: 'varios',
        image: cardGrey,
    },
]


export default { CARDS }