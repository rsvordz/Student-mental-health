import React from "react";
import { Link as Hash } from "react-scroll"
const AboutK = () => {
  return (
    <div>
      <div className="mb-16">
      <h2 className="text-2xl  font-semibold mb-">About Us</h2>
        <p>
        Welcome to the University Counseling Website! We are committed to promoting mental well-being and supporting the holistic development of our university community. Our platform is dedicated to providing a safe and confidential space for students, faculty, and staff to seek guidance and support for their mental health concerns.
        </p>
        <br/>

        <h2 className="text-2xl  font-semibold mb-2">Our Mission</h2>
        <p>
        At the University Counseling Website, our mission is to foster an inclusive and compassionate environment that empowers individuals to navigate life's challenges effectively. We aim to create a supportive community where everyone feels valued and heard, promoting personal growth and academic success.
        </p>
      </div>
      <div className="w-[70%] grid mb-16  grid-cols-2 ">
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="CTT"
          smooth={true}
          duration={500}
        >
          Consent to Treatment &darr;
        </Hash>
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="ROI"
          smooth={true}
          duration={500}
        >
          {" "}
          Nature of Counselling &darr;
        </Hash>
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="CO"
          smooth={true}
          duration={500}
        >
          {" "}
          Consultation Services &darr;
        </Hash>
      </div>
      <section className="text-primary-100 mb-14" id="CTT">
        <h1 className="text-4xl font-semibold">Consent to Treatment</h1>
        <p>
        Thank you for considering counseling services through the University Counseling Website. Before proceeding, we want to ensure that you are fully informed and comfortable with the counseling process. Your well-being and privacy are of utmost importance to us, and obtaining your consent is an essential part of the counseling experience.
        </p>
      </section>
      <section className="text-primary-100  mb-14" id="ROI">
        <h1 className="text-4xl font-semibold">Nature of Counselling</h1>
        <p>
        Counseling is a collaborative and confidential process that involves open communication and active participation. During counseling sessions, you will have the opportunity to explore your thoughts, feelings, and concerns in a safe and supportive environment. Our professional counselors are here to listen, understand, and help you work through any challenges you may be facing.
        </p>
      </section>
      <section className="text-primary-100  mb-14" id="CO">
        <h1 className="text-4xl font-semibold">Consultation Services</h1>
        <p>
        At the KNUST Counseling Website, we offer consultation services for individuals seeking professional advice or guidance on mental health-related matters. Our consultation services are designed to provide support and insights to help you navigate challenges, make informed decisions, and enhance your overall well-being.
        </p>
      </section>
    </div>
  );
};

export default AboutK;
