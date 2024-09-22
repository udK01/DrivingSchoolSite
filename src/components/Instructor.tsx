export default function Instructor() {
  interface OptionsProps {
    optNum: number;
    benefits: string[];
  }

  const OptionComponent = ({ optNum, benefits }: OptionsProps) => {
    return (
      <>
        <div className="py-2 px-6 bg-primary_red text-[32px] rounded-3xl text-white">
          Option {optNum}
        </div>
        <ul>
          {benefits.map((benefit) => (
            <li>{benefit}</li>
          ))}
        </ul>
      </>
    );
  };

  // <li>40 Hours In-Car Training</li>
  // <li>3 Months Online Training Platform Access</li>
  // <li>£1550</li>

  return (
    <section>
      <div className="text-roboto text-[60px] text-center">
        Become an Instructor!
      </div>

      <div className="flex">
        <div className="flex flex-col flex-1 flex-shrink-0 items-center">
          <OptionComponent
            optNum={1}
            benefits={[
              "40 Hours In-Car Training",
              "3 Months Online Training Platform Access",
              "£1550",
            ]}
          />
        </div>
        <div className="flex flex-col flex-1 flex-shrink-0 items-center">
          <OptionComponent
            optNum={2}
            benefits={[
              "Pay As You Go!",
              "3 Months Online Training Platform Access",
              "£40 / Hour",
            ]}
          />
        </div>
      </div>

      <div className="text-center font-roboto text-[60px] my-20">
        What exactly do I need to become a Driving Instructor?
      </div>
    </section>
  );
}
