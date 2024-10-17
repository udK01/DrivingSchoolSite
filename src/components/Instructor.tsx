export default function Instructor() {
  interface OptionsProps {
    optNum: number;
    benefits: string[];
  }

  const OptionComponent = ({ optNum, benefits }: OptionsProps) => {
    return (
      <>
        <div className="bg-primary_gray text-white">
          <div className="py-2 px-6 bg-primary_red text-[32px]">
            Option {optNum}
          </div>
          <ul>
            {benefits.map((benefit) => (
              <li>{benefit}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <section className="min-h-screen">
      <div className="text-roboto text-[60px] text-center">
        Become an Instructor!
      </div>

      {/* Options */}
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

      {/* 3 Part Segment */}
      <div className="flex gap-10">
        <div className="flex flex-col flex-1 flex-shrink-0 items-center">
          <div>Part 1</div>
          <div>100 Multiple Choice Questions.</div>
          <div>
            85% pass mark (minimum of 20 out of 25 in each of the 4 question
            bands).
          </div>
          <div>Hazard Perception Pass Mark 57 out of 75.</div>
          <div>Cost of test £90.</div>
        </div>
        <div className="flex flex-col flex-1 flex-shrink-0 items-center">
          <div>Part 2</div>
          <div>Drive for 1 hour completing the following exercises:</div>
          <ol>
            <li> - 4 Manoeuvres</li>
            <li> - Controlled Stop</li>
            <li> - Independent Driving</li>
            <li> - 5 Vehicle Check Questions</li>
          </ol>
          <div>Mistakes Allowed:</div>
          <div>6 Driving - 0 Serious - 0 Dangerous</div>
          <div>Cost of test £111.</div>
        </div>
        <div className="flex flex-col flex-1 flex-shrink-0 items-center">
          <div>Part 3</div>
          <div>Instructional Ability</div>
          <div>
            Examiner Sits In The Back For 45 Minutes Watching You Teach.
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="text-center font-roboto text-[60px] my-20">
        How Much Will I Really Earn?
      </div>

      <div>30 hours at £32.50 = £975</div>
      <div>
        Extras: Fuel - £80, Franchise Fee - £130. You must supply your own car!
        We provide learners, you do the scheduling. Making sure you leave enough
        time between learners is crucial!
      </div>
    </section>
  );
}
