import React from "react";
import Typography from "../Typography";
import classNames from "classnames";
import Button from "../Button";
import { TbPointFilled, TbPoint } from "react-icons/tb";
import { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`,
);

const dragAndDropClasses = classNames(
  `font-gordita-medium my-2 text-[10px] text-[#41454C] `,
);

const typeDocClasses = classNames(
  `text-[#797980] font-gordita-regular text-[12px] leading-[17px] `,
);

const DocumentForm = () => {
  const [wantToDrive, setWantToDrive] = useState(false);
  const wrapperRef = useRef(null);

  const [CertVehicleReg, setCertVehicleReg] = useState<{
    name: string;
  } | null>();

  const [roadWorthiness, setRoadWorthiness] = useState<{
    name: string;
  } | null>();

  const [vehicleInsuranceCert, setVehicleInsuranceCert] = useState<{
    name: string;
  } | null>();

  const [vehiclePlateNumber, setVehiclePlateNumber] = useState<{
    name: string;
  } | null>();

  const [driverLicense, setDriverLicense] = useState<{
    name: string;
  } | null>();

  return (
    <main className="w-[90%] lg:mx-auto lg:max-w-[500px]">
      <div className="mb-4  text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Documents
        </Typography>
      </div>
      <div className="text-brandGray-100 mb-8">
        <Typography as="p" font="font-gordita-regular">
          Please enter the required details to get started
        </Typography>
      </div>

      <section className="flex-auto">
        <div className="">
          <form className="mt-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-4">
              <div className="col-span-full">
                <label className={labelClasses}>License number</label>
                <div className="mt-1">
                  <input type="number" className={inputClasses} required />
                </div>
              </div>
            </div>

            <div className="my-[20px] text-brandGray-100 font-gordita-regular text-[14px] leading-[21px]">
              Oxtra offers trained drivers to handle your vehicle. Will you
              drive or use our driver? Choosing to drive yourself can earn you
              more.
            </div>

            <div className="mt-6 flex gap-[32px] mb-[35.5px]">
              <div className="flex gap-1 items-center">
                {wantToDrive ? (
                  <TbPoint
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setWantToDrive(false)}
                  />
                ) : (
                  <TbPointFilled className="w-5 h-5 text-[#438950]" />
                )}

                <span
                  className={`${
                    !wantToDrive
                      ? "text-brandGreen-300 font-gordita-bold "
                      : " font-gordita-regular"
                  } text-[12px] text-brandGray-300 leading-[12px] `}
                >
                  Oxtra can provide driver
                </span>
              </div>
              <div className="flex h-5 gap-1 items-center">
                {wantToDrive ? (
                  <TbPointFilled className="w-5 h-5 text-[#438950]" />
                ) : (
                  <TbPoint
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setWantToDrive(true)}
                  />
                )}
                <span
                  className={`${
                    wantToDrive
                      ? "text-brandGreen-300 font-gordita-bold "
                      : " font-gordita-regular"
                  } text-[12px] text-brandGray-300 leading-[12px] `}
                >
                  I want to drive
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              {/* first row */}
              <div
                ref={wrapperRef}
                className="drop-file-input bg-[#f9fafb]
                "
              >
                <span className="">
                  <AiOutlineCloudUpload className="w-7 h-7" />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {CertVehicleReg?.name ||
                    "Certificate of vehicle registration"}{" "}
                </span>
                <input
                  multiple={false}
                  type="file"
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setCertVehicleReg(e.target.files[0]);
                  }}
                />
              </div>

              <div
                ref={wrapperRef}
                className="drop-file-input bg-[#f9fafb]
                "
              >
                <span className="">
                  <AiOutlineCloudUpload className="w-7 h-7" />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {roadWorthiness?.name || "Road worthiness"}{" "}
                </span>
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setRoadWorthiness(e.target.files[0]);
                  }}
                />
              </div>

              {/* second row */}

              <div
                ref={wrapperRef}
                className="drop-file-input mb-8  bg-[#f9fafb]
                "
              >
                <span className="">
                  <AiOutlineCloudUpload className="w-7 h-7" />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {vehicleInsuranceCert?.name ||
                    "Vehicle insurance certificate"}{" "}
                </span>
                <input
                  multiple={false}
                  type="file"
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setVehicleInsuranceCert(e.target.files[0]);
                  }}
                />
              </div>

              <div
                ref={wrapperRef}
                className="drop-file-input mb-8 bg-[#f9fafb]
                "
              >
                <span className="">
                  <AiOutlineCloudUpload className="w-7 h-7" />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {vehiclePlateNumber?.name || "Vehicle plate number "}{" "}
                </span>
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setVehiclePlateNumber(e.target.files[0]);
                  }}
                />
              </div>

              {wantToDrive && (
                <div
                  ref={wrapperRef}
                  className="drop-file-input mb-8 bg-[#f9fafb]
                "
                >
                  <span className="">
                    <AiOutlineCloudUpload className="w-7 h-7" />
                  </span>

                  <div className={dragAndDropClasses}>
                    Drag and drop or Choose file to upload
                  </div>
                  <span className={typeDocClasses}>
                    {driverLicense?.name || "Drivers license"}{" "}
                  </span>
                  <input
                    type="file"
                    required
                    onChange={(e) => {
                      if (!e.target.files) {
                        return;
                      }
                      setDriverLicense(e.target.files[0]);
                    }}
                  />
                </div>
              )}
            </div>

            <Button
              bg="bg-brandGreen-300"
              hover="hover:bg-brandGray-200"
              textColor="text-white"
              width={true}
              size="text-sm"
              type="submit"
            >
              Next
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default DocumentForm;
