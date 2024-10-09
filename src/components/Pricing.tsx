export default function Pricing() {
  interface PriceComponentProps {
    text: string;
    price: string | number;
  }

  const PriceComponent = ({ text, price }: PriceComponentProps) => {
    return (
      <div className="flex font-poppins w-full items-end border-dotted border-b-[4px] border-primary_red">
        <div>{text}</div>
        <div className="flex-grow mx-2"></div>
        <div>{price}</div>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center space-y-10">
      <div className="text-[80px] font-bold font-roboto">Prices</div>
      <div className="text-[25px] w-[50%] flex flex-col justify">
        <PriceComponent text={"1 Hour Manual"} price={"£34.99"} />
        <PriceComponent text={"10 Hour Manual"} price={"£320.00"} />
        <PriceComponent text={"30 Hour Manual"} price={"£879.99"} />
      </div>
      <div className="text-[25px] w-[50%] flex flex-col justify">
        <PriceComponent text={"1 Hour Automatic"} price={"£37.99"} />
        <PriceComponent text={"10 Hour Automatic"} price={"£370.00"} />
        <PriceComponent text={"30 Hour Automatic"} price={"£999.99"} />
      </div>
    </section>
  );
}
