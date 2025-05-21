export default function InformationSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-4">
          {`Here's how our loan repayment works:`}
        </h2>
        <p className="mb-4">
          <strong>Flexible Options: </strong>We offer a range of repayment
          tenures, allowing you to choose a period that aligns with your
          financial capacity. Whether you prefer to clear your debt quickly or
          opt for smaller monthly installments, we have options to suit your
          needs.
        </p>
        <p className="mb-4">
          <strong>EMI Calculation:</strong>{" "}
          {`Our Equated Monthly Installment
          (EMI) calculator helps you determine the exact amount you'll repay
          each month. This transparency enables you to plan your finances
          effectively.`}
        </p>
        <p className="mb-4">
          <strong>Auto-Debit Facility:</strong> To ensure you never miss a
          payment, we offer an auto-debit facility. Your EMI amount is
          automatically deducted from your linked bank account, giving you peace
          of mind.
        </p>
        <p className="mb-4">
          <strong>Online Payment:</strong> We provide a secure online platform
          for you to make your EMI payments conveniently. Say goodbye to long
          queues and enjoy the ease of digital transactions.
        </p>
        <p className="mb-4">
          <strong>Timely Reminders:</strong> We send you timely reminders before
          your EMI due date, helping you stay on top of your repayment schedule.
        </p>
        <p className="mb-4">
          <strong>No Hidden Charges:</strong>{" "}
          {`Our commitment to transparency
          means you won't encounter any hidden charges. The amount you agree
          upon during the loan approval process is what you'll repay – no
          surprises.`}
        </p>
      </div>

      <div className="flex flex-col mt-8">
        <h2 className="text-xl font-bold mb-4">
          What is the maximum and minimum repayment period at PaisaOnSalary?
        </h2>
        <p>
          {`At PaisaOnSalary, we allow you enough time and flexibility to repay
          your loan. This is done to ensure that repayments don't feel like
          a burden. However, when it comes to the precise duration, the
          minimum repayment period is 60 days, and the maximum repayment
          period is 90 days.`}
        </p>
      </div>
    </div>
  );
}
