import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Pick_Return from "@/components/constants/Pick_Return";
import { paymentOptions } from "@/components/constants/arrays";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import creditCardType from "credit-card-type";

const checkout = () => {
  const dataClasses = classNames("text-[#242424] font-gordita-bold");

  const parClasses = classNames("flex items-center justify-between");
  const [show, setShow] = useState({
    card: false,
    wallet: false,
    transfer: false,
  });

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    type: "",
    cvv: "",
  });
  const [cardLogo, setCardLogo] = useState("");

  const formatCardNumber = (input: any) => {
    let cardNumber = input.replace(/\D/g, "");
    cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ").trim();
    return cardNumber;
  };

  const formatCardExpiry = (input: any) => {
    let cardExpiry = input.replace(/\D/g, "");
    cardExpiry = cardExpiry.replace(/(\d{2})(\d{1,2})/, "$1/$2").trim();
    return cardExpiry;
  };

  const handleCardNumberChange = (event: any) => {
    const number = event.target.value;
    const input = event.target.value.replace(/\s/g, "");
    const cardTypeInfo = creditCardType(number);
    if (cardTypeInfo.length > 0) {
      const type = cardTypeInfo[0].type;
      setCard({ ...card, type: type });
      const logos = {
        mastercard: "../assets/mastercard.jpg",
      };
      /* @ts-ignore */
      setCardLogo(logos[type] || "");
    } else {
      setCard({ ...card, type: "" });
      setCardLogo("");
    }
    setCard({ ...card, number: formatCardNumber(input) });
  };

  useEffect(() => {
    if (!card?.number) {
      setCard({ ...card, type: "" });
      setCardLogo("");
    }
  }, [card?.number]);

  const handleKeyPress = (e: any, limit: any) => {
    if (limit && e.target.value.length >= limit) {
      e.preventDefault();
    }
  };

  return (
    <div className="mb-[71px]">
      <Container>
        <Navigation
          color="text-brandGray-300"
          hover="hover:text-brandGreen-300"
          buttonBg="bg-brandGreen-300"
          buttonText="text-white"
          buttonHover="hover:bg-white"
          activePage=""
          navBackground="white"
          menuColor="text-brandGreen-300"
        />{" "}
      </Container>

      <Flex flexDir="column" justifyContent="center" align="center">
        <Box mt={{ base: "50px", md: "30px" }}>
          <Pick_Return />
        </Box>

        <Box
          px={{ base: "10px", md: "unset" }}
          mt="40px"
          w={{ base: "100%", md: "30%" }}
        >
          <Box border="1px solid #E4E4E4" borderRadius="12px" p="24px">
            <Text fontWeight={700} color="#242424">
              Price Breakdown
            </Text>

            <Flex flexDir="column" gap="24px" mt="24px">
              <Box className={parClasses}>
                <Text color="#646464">Vehicle price per day</Text>
                <Text className={dataClasses}>₦12,000</Text>
              </Box>

              <Box className={parClasses}>
                <Text color="#646464">No. of days</Text>
                <Text className={dataClasses}>3</Text>
              </Box>

              <Box className={parClasses}>
                <Text color="#646464">Driver Service</Text>
                <Text className={dataClasses}>₦5,000</Text>
              </Box>

              <Box h="1px" w="full" bg="#E4E4E4"></Box>

              <Box className={parClasses}>
                <Text color="#646464">Total</Text>
                <Text className={dataClasses}> ₦41,000</Text>
              </Box>
            </Flex>
          </Box>

          <Box mt="23px" textAlign="center">
            <Text color="#444648" fontWeight={700} fontSize="24px">
              Payment
            </Text>
            <Text mt="16px" color="#646668" fontSize="14px">
              Select your preferred payment method
            </Text>
            <Box mt="23px">
              {paymentOptions.map((item: any, i: any) => (
                <Box bg="#F4F4F4" borderRadius="8px" mb="23px" p="16px">
                  <Flex
                    cursor="pointer"
                    align="center"
                    onClick={() => {
                      setShow((prevShow) => ({
                        ...paymentOptions.reduce((acc: any, option: any) => {
                          acc[option.toLowerCase()] =
                            option === paymentOptions[i]
                              ? /* @ts-ignore */
                                !prevShow[option.toLowerCase()]
                              : false;
                          return acc;
                        }, {}),
                      }));

                      setTimeout(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                      }, 0);
                    }}
                    w="full"
                    justifyContent="space-between"
                  >
                    <Text fontSize="14px" fontWeight={500}>
                      Pay Via {i === 1 ? "Oxtra" : ""} {item}
                    </Text>
                    {/* @ts-ignore */}
                    {show[item.toLowerCase()] ? (
                      <IoIosArrowUp size="12px" />
                    ) : (
                      <IoIosArrowForward size="12px" />
                    )}
                  </Flex>

                  {i === 1 && show?.wallet ? (
                    <Box
                      mt="12px"
                      bg="#fff"
                      py="16px"
                      px="24px"
                      borderRadius="12px"
                      textAlign="start"
                      border="1px solid #E4E4E4"
                    >
                      <Text fontSize="12px" color="#444648" fontWeight={500}>
                        Wallet Balance
                      </Text>
                      <Text
                        fontSize="32px"
                        color="#242424"
                        fontWeight={700}
                        my="16px"
                      >
                        ₦5,000
                      </Text>

                      <Button
                        bg="#438950"
                        _hover={{ opacity: 0.8 }}
                        borderRadius="8px"
                        h="48px"
                        color="#fff"
                        fontSize="14px"
                        fontWeight={500}
                        _active={{ bg: "#438950" }}
                        _focus={{ bg: "#438950" }}
                        w="full"
                      >
                        Top Up Wallet
                      </Button>
                    </Box>
                  ) : i == 2 && show?.transfer ? (
                    <Box
                      mt="12px"
                      bg="#fff"
                      py="16px"
                      px="24px"
                      borderRadius="12px"
                      textAlign="start"
                      border="1px solid #E4E4E4"
                    >
                      <Text fontSize="12px" color="#444648" fontWeight={500}>
                        Providus Bank
                      </Text>
                      <Flex
                        align="center"
                        justifyContent="space-between"
                        w="full"
                      >
                        <Text
                          color="#242424"
                          fontSize="32px"
                          fontWeight={700}
                          my="16px"
                        >
                          0948300045
                        </Text>
                        <FiCopy color="#438950" cursor="pointer" size="20px" />
                      </Flex>
                      <Text fontWeight={500} fontSize="12px" color="#438950">
                        Samuel Umoru - Oxtra
                      </Text>
                    </Box>
                  ) : (
                    i === 0 &&
                    show?.card && (
                      <Box textAlign="start" mt="18px">
                        <Box>
                          <Text
                            fontSize="12px"
                            color="#344054"
                            fontWeight={500}
                          >
                            Card Number
                          </Text>
                          <InputGroup>
                            <InputLeftElement
                              display={card?.number ? "flex" : "none"}
                              h="44px"
                            >
                              <Flex
                                border="1px solid #F2F4F7"
                                borderRadius="4px"
                                h="24px"
                                w="34px"
                                justifyContent="center"
                                align="center"
                              >
                                <Image
                                  w="23px"
                                  h="14px"
                                  objectFit="contain"
                                  src={cardLogo}
                                />
                              </Flex>
                            </InputLeftElement>
                            <Input
                              bg="#fff"
                              borderRadius="8px"
                              py="10px"
                              px="14px"
                              onKeyPress={(e) => handleKeyPress(e, 19)}
                              h="44px"
                              type="text"
                              value={card?.number}
                              onChange={handleCardNumberChange}
                              border="1px solid #D0D5DD"
                              color="#101828"
                            />
                          </InputGroup>
                        </Box>

                        <Flex mt="16px" align="center" gap="16px">
                          <Box w="full">
                            <Text
                              fontSize="12px"
                              color="#344054"
                              fontWeight={500}
                            >
                              Expiry
                            </Text>
                            <Input
                              bg="#fff"
                              borderRadius="8px"
                              py="10px"
                              px="14px"
                              onKeyPress={(e) => handleKeyPress(e, 5)}
                              type="text"
                              value={card?.expiry}
                              onChange={(e) =>
                                setCard({
                                  ...card,
                                  expiry: formatCardExpiry(e.target.value),
                                })
                              }
                              h="44px"
                              border="1px solid #D0D5DD"
                              color="#101828"
                            />
                          </Box>

                          <Box w="full">
                            <Text
                              fontSize="12px"
                              color="#344054"
                              fontWeight={500}
                            >
                              CVV
                            </Text>
                            <Input
                              bg="#fff"
                              borderRadius="8px"
                              py="10px"
                              value={card?.cvv}
                              onChange={(e) =>
                                setCard({ ...card, cvv: e.target.value })
                              }
                              type="number"
                              onKeyPress={(e) => handleKeyPress(e, 3)}
                              px="14px"
                              h="44px"
                              border="1px solid #D0D5DD"
                              color="#101828"
                            />
                          </Box>
                        </Flex>
                      </Box>
                    )
                  )}
                </Box>
              ))}
            </Box>

            <Flex
              color="#438950"
              fontWeight={500}
              justifyContent="center"
              align="center"
              fontSize="14px"
            >
              <Text cursor="pointer">Skip Payment for now</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default checkout;
