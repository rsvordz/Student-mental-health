import axios from "axios";

export const bookAnAppointMent = async (data) => {
  console.log("sending");
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/booking/`,
      data
    );
    console.log("response data : ", res);
    return res;
  } catch (error) {
    console.log("Error message", error);
  }
};

export const chatWithBot = async (data) => {
  console.log("sending");
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/self_help/chat/`,
      data
    );
    console.log("response data : ", res);
    return res;
  } catch (error) {
    console.log("Error message", error);
  }
};
