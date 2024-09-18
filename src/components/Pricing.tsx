export default function Pricing() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-[80px] font-bold font-roboto">Prices</div>
      <div className="text-[25px] w-[50%] flex flex-col justify">
        <div className="flex font-poppins w-full items-end">
          <div>1 Hour Manual</div>
          <div className="flex-grow border-dotted border-b border-primary_red border-[6px] mx-2"></div>
          <div>£34.99/hr</div>
        </div>
      </div>
    </section>
  );
}
