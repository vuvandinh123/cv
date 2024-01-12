
const Education = () => {
  return (
    <div className="px-5 my-10">
      <div className="flex justify-center mb-10 items-center">
        <div className="xl:w-1/2 ">
          <h2 id="education" className="text-center text-3xl font-semibold mb-2">Education</h2>
          <p className="text-gray-500 text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            placeat soluta maxime porro similique, alias itaque? Temporibus,
            ducimus? At ipsa id voluptas neque voluptatem, nobis officiis quia
            soluta aliquid ducimus.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white">
          <ul className="rounded-md shadow-md bg-white  mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              2018 - 2021
            </li>
            <li className="lg:grid lg:grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
              <div className="flex justify-center items-center">
                <img
                  className="!w-20 flex-shrink-0 h-20 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-start-2 lg:col-end-11 lg:pl-8 lg:border-l-2 border-solid border-gray">
                <h3 className="text-gray-900 text-center lg:text-start mt-5 lg:mt-0 font-medium text-md">
                  High school Le Quy Don - Da Teh
                </h3>
                <p className="text-gray-600 text-center lg:text-start mt-1 font-regular text-sm">
                  Huyện Đạ Tẻh Tỉnh Lâm Đồng
                </p>
              </div>
            </li>
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              2021 - 2024
            </li>
            <li className="lg:grid lg:grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
              <div className="flex justify-center items-center">
                <img
                  className="w-20 h-20"
                  src="https://upload.wikimedia.org/wikipedia/vi/thumb/7/71/Hitu.png/375px-Hitu.png"
                  alt=""
                />
              </div>
              <div className="lg:col-start-2 lg:col-end-11 lg:pl-8 lg:border-l-2 border-solid border-gray">
                <h3 className="text-gray-900 text-center mt-5 lg:mt-0 lg:text-start font-medium text-md">
                  Ho Chi Minh City Industry and Trade College
                </h3>
                <p className="text-gray-600 mt-1 text-center lg:text-start font-regular text-sm">
                  Số 20, Tăng Nhơn Phú, Phường Phước Long B, Quận 9, Thành phố
                  Hồ Chí Minh
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
