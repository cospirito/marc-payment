import {
  useEffect,
  useState
} from 'react';
import './App.css';
import {
  countries
} from './countries';
import OrderDetail from './OrderDetail';

function App() {
  const [payment, setPayement] = useState('card')
  const [cities, setCities] = useState([])

  useEffect(() => {

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://www.paypalobjects.com/api/checkout.js'

    script.async = true;
    script.onload = () => {

      let el = document.getElementById('paypal-button')
      el.innerHTML = ''
      let allowed = [];

      if (payment === 'card') {
        allowed = [window.paypal.FUNDING.CARD, window.paypal.FUNDING.ELV]
      }
      if (payment === 'paypal') {
        allowed = [window.paypal.FUNDING.CREDIT]
      }
      if (payment === 'pm') {
        allowed = []
        el.innerHTML = ''
        return
      }



      window.paypal.Button.render({
        // Configure environment
        env: 'sandbox',
        client: {
          sandbox: 'demo_sandbox_client_id',
          production: 'demo_production_client_id'
        },
        funding: {
          allowed: [...allowed],
        },
        // Customize button (optional)
        locale: 'en_US',
        style: {
          size: 'responsive',
          color: 'silver',
          shape: 'rect',
          tagline: false,
          fundingicons: true,
        },

        // Enable Pay Now checkout flow (optional)
        commit: true,

        // Set up a payment
        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [{
              amount: {
                total: '20',
                currency: 'USD'
              }
            }]
          });
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
          return actions.payment.execute().then(function () {
            // Show a confirmation message to the buyer
            window.alert('Thank you for your purchase!');
          });
        }
      }, '#paypal-button');
    };
    document.body.appendChild(script);


  }, [payment])
  const handleCountries = (e) => {
     setCities(countries[e.target.value])  

  }

  function handleEvent(e) {
    setPayement(e.target.value);
  }
  return ( <
    div className = 'flex flex-wrap' >
    <
    div className = 'w-2/6 h-full m-auto mt-24' >
    <
    h1 className = 'text-2xl font-semibold' > Checkout < /h1> <
    hr className = 'my-3' / >
    <
    p className = 'text-sm text-gray-600 pt-2' > Billing Address < /p> <
    select className = 'p-2 mt-4 w-5/12 border-gray-700 border-2'
    onChange = {
      handleCountries
    } >
    <
    option selected disabled > Country < /option> {
      Object.keys(countries).map((key) => ( <
        option > {
          key
        } < /option>
      ))
    } <
    /select> <
    select className = 'p-2 mt-4 ml-4 w-5/12 border-gray-700 border-2' >
    <
    option selected disabled > State < /option> {
      cities.map(e => ( <
        option > {
          e
        } < /option>
      ))
    } <
    /select> <
    div className = 'mt-10' >
    <
    input type = "radio"
    id = "card"
    name = "fav_language"
    value = "card"
    onChange = {
      handleEvent
    }
    /> <
    label
    for = "card"
    className = 'ml-3 text-gray-600' > New Payement Card < /label> <
    /div>    <
    div className = 'mt-5' >
    <
    input type = "radio"
    id = "paypal"
    name = "fav_language"
    value = "paypal"
    onChange = {
      handleEvent
    }
    /> <
    label
    for = "paypal"
    className = 'ml-3 text-gray-600' > Paypal < /label> <
    /div> <
    div className = 'mt-5' >
    <
    input type = "radio"
    id = "pm"
    name = "fav_language"
    value = "pm"
    onChange = {
      handleEvent
    }
    /> <
    label
    for = "pm"
    className = 'ml-3 text-gray-600' > Paiement manuelle < /label> <
    /div> <
    div id = "paypal-button"
    className = 'mt-6' > < /div>

    <
    OrderDetail > < /OrderDetail> <
    /div> <
    div className = 'w-2/6 h-full mt-36 mr-32 shadow-md' >
    <
    div className = 'border-2 border-gray-300 p-3' >
    <
    p className = 'text-2xl text-gray-600 ' > Summary < /p> <
    div className = 'flex justify-between' >
    <
    p className = 'text-sm pt-3 text-gray-500' > Original price < /p> <
    p className = 'text-sm pt-3 text-gray-500' > 20 $ < /p> <
    /div> <
    hr className = 'mt-3 mb-3' / >
    <
    div className = 'flex justify-between' >
    <
    p className = 'text-xl font-semibold text-gray-800' > Original price < /p> <
    p className = 'text-xl font-semibold text-gray-800' > 20 $ < /p> <
    /div> <
    p className = 'text-xs text-gray-500 mt-5' > Lorem Ipsum dolor Asmet Lorem Ipsum dolor Asmet Lorem Ipsum dolor Asmet Lorem Ipsum dolor Asmet < /p>

    <
    p className = 'text-xs text-gray-500 mt-5' > By completing your purshace you agree to these < span className = 'text-purple-600 cursor-pointer' > Terms of service < /span></p >
    <
    button className = 'w-full bg-purple-600 p-4 text-white mt-5' > Complete Payement < /button>

    <
    /div> <
    /div> <
    /div>
  );
}

export default App;