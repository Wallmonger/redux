import phone from '../img/phone.png';

const PhoneComponent = () => {
    return (
        <div className="container">
            <img src={phone} alt="phone" />
            <p>
                Availability:
                <span id="count"></span>
            </p>
            <button>Buy</button>
        </div>
    )
}

export default PhoneComponent