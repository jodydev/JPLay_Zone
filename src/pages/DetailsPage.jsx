import PaymentForm from "../components/DetailsPage/PaymentForm";
import DetailsLayout from "../components/DetailsLayout";

function DetailsPage({ games }) {
  return (
    <DetailsLayout games={games}>
      <PaymentForm games={games} />
    </DetailsLayout>
  );
}

export default DetailsPage;
