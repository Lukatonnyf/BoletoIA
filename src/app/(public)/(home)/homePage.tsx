import BusinessSecurity from "./components/businessSecurity";
import Introduction from "./components/introduction";
import Join from "./components/join";
import WhyBoletoIA from "./components/whyBoletoIA";

export default function HomePage() {
  return (
    <div className="w-full  ">
      <Introduction />
      <WhyBoletoIA />
      <BusinessSecurity />
      <Join />
    </div >
  );
}
