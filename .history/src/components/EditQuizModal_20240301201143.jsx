const EditQuizModal = () => {
  return (
    <div>
            <input type="checkbox" id="booking-modal" checked={isOpenModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box overflow-y-visible bg-warning relative">
                    <label onClick={setIsModalOpen} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form className=" p-10 " onSubmit={handleSubmit(handleBooking)}>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("userName")}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={user?.displayName} readOnly />
                            {errors.userName && <p className="text-red-600">{errors.userName?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="email"
                                {...register("email")}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={user?.email} readOnly />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("productName")}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={productName} readOnly />
                            {errors.productName && <p className="text-red-600">{errors.productName?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("resalePrice")}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={resalePrice} readOnly />
                            {errors.resalePrice && <p className="text-red-600">{errors.resalePrice?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("mobileNumber", { required: "Mobile number is required" })}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Phone Number' />
                            {errors.mobileNumber && <p className="text-red-600">{errors.mobileNumber?.message}</p>}
                        </div>


                        <div className="form-control w-full  relative">
                            <input type="text"
                                {...register("meetingLocation", { required: "Meeting Location is required" })}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Meeting Location' />
                            {errors.meetingLocation && <p className="text-red-600">{errors.meetingLocation?.message}</p>}
                        </div>
                        <br />
                        <div className='mb-5 flex items-center justify-center'>
                            <button className='btn btn-secondary'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
  );
};

export default EditQuizModal;



const BookingModal = ({ modalInfo, isOpenModal, setIsModalOpen }) => {



