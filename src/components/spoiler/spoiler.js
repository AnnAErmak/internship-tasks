import Component from '../../app/js/base/Component';

class Spoiler extends Component {
    iconElement;
    textElement;
    isOpen = false;

    constructor(element) {
        super(element);

        this.textElement = this.getElement('text')
        this.iconElement = this.getElement('svg')

        this.root.addEventListener('click', this.onButtonClick)
    }

    onButtonClick = () => {

        this.isOpen ? this.close() : this.open()
    }

    open(){
        const scrollHeight = this.textElement.scrollHeight
        this.textElement.classList.add('open')
        this.iconElement.classList.add('open')
        this.textElement.style.height = `${scrollHeight}px`
        this.isOpen = true
    }
    close(){
        this.textElement.classList.remove('open')
        this.iconElement.classList.remove('open')
        this.textElement.style.height = '0'
        this.isOpen = false
    }
}

export default Spoiler