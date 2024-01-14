import { useEffect, useState } from "react";
import { postReviews } from "../../../firebase/fetchReviews";

const Review = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const handleChangeName = (e) => setData({ ...data, name: e.target.value });
  const handleChangeEmail = (e) => setData({ ...data, email: e.target.value });
  const handleChangeContent = (e) =>
    setData({ ...data, content: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPost = await postReviews(data);
    if (isPost) {
      setData({ name: "", email: "", content: "" });
      // alert("Thanks for your review!");
    } else {
      alert("Something went wrong, please try again!");
    }
  };
  return (
    <div>
      <div className="flex items-center min-h-screen ">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white dark:bg-[#1e2329] shadow-lg p-5 rounded-md ">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Leave a review
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
                Fill up the form below to send us a message.
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChangeName}
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={handleChangeEmail}
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    onChange={handleChangeContent}
                    value={data.content}
                  >
                  </textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
