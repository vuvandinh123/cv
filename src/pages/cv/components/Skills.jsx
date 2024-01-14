const Skills = () => {
  return (
    <div className="basis-3/4 px-5">
      <div className="before:contents-[''] mb-5 relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
        <h2 className="font-bold uppercase">about me</h2>
        <div className="mt-3">
          <div className="text-gray-500">
            <p className="indent-2">
              I am passionate about front-end development to create
              user-friendly websites. With 1 years of experience working with
              HTML/CSS, JavaScript and ReactJS, I have developed strong
              capabilities in these technologies. I pride myself on my ability
              to quickly learn new skills, work effectively in teams, and
              communicate well.
            </p>
          </div>
        </div>
      </div>
      <div className="before:contents-[''] mb-5 relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
        <h2 className="font-bold uppercase">PROJECT</h2>
        <div className="flex justify-between items-center">
          <h6 className="font-semibold">Website ecommerce</h6>
          <p className="text-gray-500 text-[12px]">6/2022 - 8/2022</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="text-start pr-5" style={{ verticalAlign: "top" }}>
                Description:
              </td>
              <td
                className="text-gray-500 text-start"
                style={{ textAlign: "left" }}
              >
                Electronic sales website, allowing users to log in, post
                products for sale, buy online and make electronic payments.
              </td>
            </tr>
            <tr>
              <td className="text-start pr-5" style={{ verticalAlign: "top" }}>
                Technologies:
              </td>
              <td
                className="text-gray-500 text-start"
                style={{ textAlign: "left" }}
              >
                <p className="text-gray-500 col-span-4">ReactJs, Express</p>
              </td>
            </tr>
            <tr className="mt-5">
              <td className="text-start pr-5" style={{ verticalAlign: "top" }}>
                Role:
              </td>
              <td
                className="text-gray-500 text-start"
                style={{ textAlign: "left" }}
              >
                <p className="text-gray-500 col-span-4 indent-4">
                  Developed front-end interfaces for homepage, product category
                  pages, product details, cart and checkout. Integrated APIs to
                  handle app functions.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold">Website ecommerce</h6>
            <p className="text-gray-500 text-[12px]">6/2022 - 8/2022</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Description:{" "}
            </label>
            <p className="text-gray-500 col-span-4">
              Electronic sales website, allowing users to log in, post products
              for sale, buy online and make electronic payments.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Technologies:{" "}
            </label>
            <p className="text-gray-500 col-span-4">ReactJs, Express</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Role:{" "}
            </label>
            <p className="text-gray-500 col-span-4">
              Developed front-end interfaces for homepage, product category
              pages, product details, cart and checkout. Integrated APIs to
              handle app functions.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Demo:
            </label>
            <p className="text-gray-500 col-span-4">
              <a
                href="https://vuvandinh123.github.io/cv"
                className="text-blue-500"
              >
                https://vuvandinh123.github.io/cv
              </a>
            </p>
          </div>
        </div>
        {/* <div className="mt-3">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold">Website NFT</h6>
            <p className="text-gray-500 text-[12px]">6/2022 - 8/2022</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Description:{" "}
            </label>
            <p className="text-gray-500 col-span-4">
              Electronic sales website, allowing users to log in
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Technologies:{" "}
            </label>
            <p className="text-gray-500 col-span-4">ReactJs, Express</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Role:{" "}
            </label>
            <p className="text-gray-500 col-span-4">
              Developed front-end interfaces for homepage, product category
              pages, product details, cart and checkout. Integrated APIs to
              handle app functions.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <label className="block w-32 col-span-1" htmlFor="">
              Demo:
            </label>
            <p className="text-gray-500 col-span-4">
              <a
                href="https://vuvandinh123.github.io/cv"
                className="text-blue-500"
              >
                https://vuvandinh123.github.io/cv
              </a>
            </p>
          </div>
        </div> */}
      </div>
      <hr />
    </div>
  );
};

export default Skills;
