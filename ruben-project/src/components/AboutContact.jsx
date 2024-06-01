import React from "react";

const AboutContact = () => {
  return (
    <div className="text-primary-100">
      <h1 className="text-5xl mb-10 font-semibold">Contact</h1>
      <div className="mb-8">
        <p>
          The KNUST Counseling Center (KCC) is located in the Dean of Students, J. Harper Building.
        </p>

        <p>
          The KCC is open Monday through Friday from 8 a.m. to 5 p.m. Hours may
          vary during University holidays and breaks.
        </p>
      </div>
      <div>
        <div className="mb-2">
          <h4 className="text-lg font-semibold">Telephone:</h4>
          <p>+233 50 644 9747</p>
        </div>

        <div className="">
          <h4 className="text-lg font-semibold">Mailing Address:</h4>
          <p>
            KNUST Counseling Center <br />
            Peer Counselling Department <br />
            P.O. Box 854 <br />
            Kwame Nkrumah UNiversity of Science and Technology <br />
            Kumasi, Ghana
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
