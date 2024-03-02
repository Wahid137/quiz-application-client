const EditQuizModal = ({ modalInfo, isOpenModal, setIsModalOpen }) => {
  const handleAdd = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="booking-modal"
        checked={isOpenModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box overflow-y-visible bg-warning relative">
          <label
            onClick={setIsModalOpen}
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h3>
          <form className=" p-10 " onSubmit={handleAdd}>
            <div className="form-control w-full mb-8 relative">
              <input
                type="text"
                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue="lorem korem motem"
                readOnly
              />
            </div>

            {/*  <div className="form-control w-full mb-8 relative">
              <input
                type="email"
                {...register("email")}
                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={user?.email}
                readOnly
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div> */}

            <br />
            <div className="mb-5 flex items-center justify-center">
              <button className="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQuizModal;
