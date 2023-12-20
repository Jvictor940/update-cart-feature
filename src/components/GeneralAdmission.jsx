import React, { useState } from 'react'
import QuantityDropdownField from '../FieldComponents/QuantityDropdownField';
import Cart from './Cart';

const GeneralAdmission = () => {
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // State to manage the selected quantity and day for each ticket type
  const [selectedTickets, setSelectedTickets] = useState({
    day1: { type: "General Admission - Saturday", quantity: 0, day: 'Saturday', price: 2500 },
    day2: { type: "General Admission - Sunday", quantity: 0, day: 'Sunday', price: 2500 },
    day3: { type: "General Admission - Saturday & Sunday", quantity: 0, day: 'Saturday & Sunday', price: 4000 },
    // Add more days as needed
  });

  // Function to update the cart based on the selected quantity and day
  const addToCart = () => {
    // Extracting selected tickets
    const selectedTicketTypes = Object.values(selectedTickets);

    // Filtering out ticket types with quantity > 0
    const selectedTicketsToAdd = selectedTicketTypes.filter(ticket => ticket.quantity > 0);

    // Creating an array with the selected tickets
    const ticketsToAdd = selectedTicketsToAdd.flatMap(ticket => (
      Array.from({ length: ticket.quantity }, (_, index) => ({
        label: `Ticket ${index + 1}`,
        price: ticket.price,
        type: ticket.type
      }))    
    ));

    console.log('Tickets', ticketsToAdd);

    // Create a new copy of the cart with the selected tickets
    const updatedCart = [...ticketsToAdd];

    // Update the cart state
    setCart(updatedCart);

    // Reset the selected quantity after adding to the cart
    // setSelectedTickets({
    //   day1: { quantity: 0, day: 'day1' },
    //   day2: { quantity: 0, day: 'day2' },
    //   day3: { quantity: 0, day: 'day 3' },
    //   // Reset more days as needed
    // });
  };

  // Function to handle the change in quantity and day from the dropdown
  const handleQuantityChange = ({ quantity, day, price, type }) => {
    // Update the selected quantity and day state
    setSelectedTickets(prevState => ({
      ...prevState,
      [day]: { ...prevState[day], quantity: quantity, price: price, type: type },
    }));
  };

  // Calculate the total price of the selected tickets in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  console.log('cart', cart)
  return (
    <div>
      <h1>General Admission</h1>

      {/* Multiple QuantityDropdownFields for different days */}
      <h3>General Admission - Saturday</h3>
      <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day1" price={2500} type="General Admission - Saturday" />
      <h3>General Admission - Sunday</h3>
      <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day2" price={2500} type="General Admission - Sunday" />
      <h3>General Admission Saturday & Sunday</h3>
      <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day3" price={4000} type="General Admission - Saturday & Sunday" />
      {/* Add more QuantityDropdownFields for additional days as needed */}

      <button onClick={addToCart}>Update Cart</button>

      {/* Pass the cart state to the Cart component */}
      <section>
        {Array.isArray(cart) && cart.length > 0 && <Cart cart={cart} totalPrice={calculateTotalPrice()} />}
      </section>
    </div>
  );
};

export default GeneralAdmission;
