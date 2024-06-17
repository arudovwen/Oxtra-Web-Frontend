import Container from "@/layout/NonAuthLayout/Container";
import { useRouter } from "next/router";
import { RiArrowRightDownLine } from "react-icons/ri";
import classNames from "classnames";
import TripDetails from "@/components/data/rent-a-car/booking/TripDetails";
import Breakdown from "@/components/data/rent-a-car/booking/Breakdown";
import { useEffect, useState } from "react";
import { useGetNonUserVehicle } from "@/services/query/vehicle";
import { Box, Flex, Spinner } from "@chakra-ui/react";

const Bookings = () => {
  const router = useRouter();
  const { car_name, car_id } = router.query;

  // @ts-ignore
  const { data, isLoading, refetch } = useGetNonUserVehicle(car_id, {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, []);

  const dataClasses = classNames("text-[#242424] font-gordita-bold");

  const parClasses = classNames("flex items-center justify-between");

  const [values, setValues] = useState({
    rent_values: "",
    vehicle_id: "",
    price: "",
    note: "",
  });

  const calculateDayDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    // @ts-ignore
    const differenceInTime = end - start;

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };

  useEffect(() => {
    // @ts-ignore
    const rent_values = JSON.parse(sessionStorage.getItem("rent_values"));
    setValues({
      // @ts-ignore
      ...values,
      rent_values: rent_values,
      // @ts-ignore
      vehicle_id: car_id,
      // @ts-ignore
      price: Number(
        Number(data?.data?.price_per_day) *
          // @ts-ignore
          calculateDayDifference(
            // @ts-ignore
            values?.rent_values?.pickUp,
            // @ts-ignore
            values?.rent_values?.dropOff
          )
      ),
    });
  }, [data]);

  return (
    <Box fontFamily="gortida" mb="108px">
      {isLoading ? (
        <Flex minH="60vh" w="full" justifyContent="center" align="center">
          <Spinner />
        </Flex>
      ) : (
        <>
          <Container>
            <div className="mt-[40px] md:mt-[72px]">
              <div className="flex items-center gap-[16px] w-fit font-gordita-medium text-[12px] md:text-[16px]">
                <div className={`text-[#444648]`}>Home</div>
                <div className="mb-[3px]">
                  <RiArrowRightDownLine />
                </div>
                <div
                  onClick={() => router.push("/rent-a-car")}
                  className="text-[#444648]"
                >
                  Find Vehicle
                </div>
                <div className="mb-[3px]">
                  <RiArrowRightDownLine />
                </div>
                <div className={`text-[#444648] cursor-pointer capitalize`}>
                  {car_name}
                </div>
                <div className={`flex mb-[3px]`}>
                  <RiArrowRightDownLine />
                </div>
                <div className={"text-[#D4D4D4] flex"}>Booking Details</div>
              </div>
            </div>

            <div
              className={`flex flex-col md:flex-row items-start gap-[40px] mt-[32px]`}
            >
              <TripDetails
                values={values}
                data={data}
                calculateDayDifference={calculateDayDifference}
                dataClasses={dataClasses}
              />

              <Breakdown
                data={data}
                setValues={setValues}
                values={values}
                parClasses={parClasses}
                calculateDayDifference={calculateDayDifference}
                dataClasses={dataClasses}
              />
            </div>
          </Container>
        </>
      )}
    </Box>
  );
};

export default Bookings;
