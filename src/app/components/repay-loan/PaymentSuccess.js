export default function PaymentSuccess({ status }) {
  return (
    <div className="text-center py-8">
      <h3 className="text-xl font-bold mb-2">{status}</h3>
      <p>Thank you for your payment!</p>
    </div>
  );
}
