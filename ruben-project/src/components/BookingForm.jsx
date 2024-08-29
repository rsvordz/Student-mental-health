import { useState } from "react";
import { useForm } from "react-hook-form";
import { bookAnAppointMent } from "../utils/actions";
import toast from "react-hot-toast";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    // bookAnAppointMent(data);
    console.log("sent data ", data);
    reset()
    toast.success("Appointment booked successfully!");
  };

  const [name, setName] = useState("");

  return (
    <div className="h-10/12 bg-gray-100 py-8 px-6 flex justify-center items-center">
      <form className="max-w-md w-full" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
        <h2 className="text-2xl font-bold mb-6">{name}</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="text"
            id="name"
            name="name"
            {...register("full_name", { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />
          {errors.full_name?.type === "required" && (
            <p role="alert">Full name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            {...register("email")}
          />
          {errors.email?.type === "required" && (
            <p role="alert">email is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required
            {...register("phone_number")}
          />
          {errors.phone_number?.type === "required" && (
            <p role="alert">Phone number is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="date"
            id="date"
            name="date"
            required
            {...register("booking_date")}
          />
          {errors.booking_date?.type === "required" && (
            <p role="alert">Booking date is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="issue">
            Issue
          </label>
          <select
            id="issue"
            name="issue"
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            {...register("issue", { required: true })}
          >
            <option value="">Select an issue</option>
            <option value="Depression">Depression</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Addiction">Addiction</option>
            <option value="Self Esteem">Self Esteem</option>
            <option value="Self Development">Self Development</option>
            <option value="Anger Management">Anger Management</option>
            <option value="Trauma Counselling">Trauma Counselling</option>
            <option value="Conflict Resolution">Conflict Resolution</option>
            <option value="Coaching">Coaching</option>
            <option value="Decision Making">Decision Making</option>
            <option value="Grief Management">Grief Management</option>
            <option value="Abuse">Abuse</option>
            <option value="Stress Management">Stress Management</option>
            <option value="Intrapersonal Issues">Intrapersonal Issues</option>
            <option value="Relationship Counselling">
              Relationship Counselling
            </option>
          </select>
          {errors.issue && (
            <p className="text-red-500 text-xs mt-1">Issue is required</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="4"
            required
            {...register("message")}
          />
          {errors.message?.type === "required" && (
            <p role="alert">Message is required</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
