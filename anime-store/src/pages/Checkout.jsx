export default function Checkout() {
  return (
    <div style={{ padding:"100px 40px" }}>
      <h1>Checkout</h1>
      <form style={{ marginTop:"30px" }}>
        <input placeholder="Full Name" /><br/><br/>
        <input placeholder="Address" /><br/><br/>
        <input placeholder="Card Number" /><br/><br/>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}